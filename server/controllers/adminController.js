import admins from "../models/admins.js";
import { genSaltSync, hashSync } from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();


export const createAdmin = async(req, res) => {
    const { firstName, lastName, email, username, password } = req.body;
    try {
        const salt = genSaltSync(10);
        const hashedPassword = hashSync(password, salt);

        const newAdmin = new admins({ firstName: firstName, lastName: lastName, email: email, username: username, password: hashedPassword, isAdmin: true });
        await newAdmin.save();

        res.status(200).json({ message: 'New Admin Created. Login' });

    } catch (error) {
        res.status(500).json(error);
    }
}

export const loginAdmin = async(req, res) => {
    const { username } = req.body;
    try {
        const isadmin = await admins.findOne({ username: username });
        if (!isadmin) return res.status(404).json({ message: 'Invalid Admin' });

        const isValid = await bcrypt.compare(req.body.password, isadmin.password);
        if (!isValid) return res.status(403).json({ message: "Unauthorized Admin" });

        const token = jwt.sign({ id: isadmin._id, admin: isadmin.isAdmin }, process.env.JWT);

        const { password, ...details } = isadmin._doc;

        res.cookie("access_token", token, { httpOnly: true }).status(200).json({ ...details });

    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

export const updateAdmin = async(req, res) => {
    const { adminId } = req.params;
    try {
        if (req.body.password) {
            const salt = genSaltSync(10);
            req.body.password = hashSync(req.body.password, salt);
        }
        const updatedAdmin = await admins.findByIdAndUpdate(adminId, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedAdmin);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAdmin = async(req, res) => {
    const { adminId } = req.params;
    try {
        const admin = await admins.findById(adminId);
        const { password, isAdmin, ...details } = admin._doc;
        res.status(200).json({ ...details });

    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllAdmins = async(req, res) => {
    try {
        const result = []
        const allAdmins = await admins.find({});
        for (const ad of allAdmins) {
            const { password, isAdmin, ...details } = ad._doc;
            result.push({ ...details });
        }
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json(error);
    }
}

// NEED AUTHENTICATION TO PERFORM THIS ACTION
export const deleteAdmin = async(req, res) => {
    const { adminId } = req.params;
    try {
        await admins.findByIdAndDelete(adminId);
        res.status(200).json({ message: 'Admin Deleted' });
    } catch (error) {
        res.status(500).json(error);
    }
}