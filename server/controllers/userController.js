import { genSaltSync, hashSync, compare } from "bcrypt";
import jwt from 'jsonwebtoken';
import users from "../models/users.js";
import dotenv from 'dotenv';

dotenv.config();

export const createUser = async(req, res) => {
    const { firstName, lastName, username, email, password } = req.body
    try {
        const salt = genSaltSync(10);
        const hashedPassword = hashSync(password, salt);

        const newUser = new users({ firstName: firstName, lastName: lastName, username: username, email: email, password: hashedPassword });
        await newUser.save();

        res.status(200).json({ message: 'New user created. Login' })
    } catch (error) {
        res.status(500).json(error);
    }
}

export const editUser = async(req, res) => {
    const { userId } = req.params;
    try {
        if (req.body.password) {
            const salt = genSaltSync(10);
            req.body.password = hashSync(req.body.password, salt);
        }
        const updatedUser = await users.findByIdAndUpdate(userId, req.body);
        const { password, ...details } = await updatedUser._doc;

        res.status(200).json({ ...details });
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteUser = async(req, res) => {
    const { userId } = req.params;
    try {
        await users.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getUser = async(req, res) => {
    const { userId } = req.params;
    try {
        const user = await users.findById(userId);
        const { password, ...details } = user._doc;
        res.status(200).json({ ...details });
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllUsers = async(req, res) => {
    try {
        const result = [];
        const userData = await users.find({});
        for (const u of userData) {
            const { password, ...details } = u._doc;
            result.push({ ...details });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const loginUser = async(req, res) => {
    const { username } = req.body;
    try {
        const user = await users.findOne({ username: username });
        if (!user) return res.status(404).json({ message: 'User Not Found' });

        const isValid = await compare(req.body.password, user.password);
        if (!isValid) return res.status(403).json({ message: 'Unauthorized' });

        const token = jwt.sign({ id: user._id }, process.env.JWT);
        const { password, ...details } = user._doc;

        res.cookie("access_token", token, { httpOnly: true }).status(200).json({ ...details });
    } catch (error) {
        res.status(500).json(error);
    }
}