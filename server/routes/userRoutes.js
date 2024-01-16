import express from 'express';
import { createUser, deleteUser, editUser, getAllUsers, getUser, loginUser } from '../controllers/userController.js';
import { validator } from '../utils/validator.js';
import { verifyAdmin, verifyUser, verifyUserAndAdmin } from '../utils/verify.js';
import { check } from 'express-validator';

const router = express.Router();

// CREATE
router.post('/create', [
    check('firstName', 'Required').isLength({ min: 2, max: 65 }),
    check('lastName', 'Required').isLength({ min: 2, max: 65 }),
    check('username', 'Required').isLength({ min: 8, max: 16 }),
    check('email', 'Required').isEmail(),
    check('password', 'Must be atleast 8 characters').isLength({ min: 8, max: 16 }),
], 
validator, createUser)

// UPDATE
router.put('/edit/:userId', [
    check('firstName', 'Required').isLength({ min: 2, max: 65 }),
    check('lastName', 'Required').isLength({ min: 2, max: 65 }),
    check('username', 'Required').isLength({ min: 8, max: 16 }),
    check('email', 'Required').isEmail(),
    check('password', 'Must be atleast 8 characters').isLength({ min: 8, max: 16 })
], validator, verifyUser, editUser)

// DELETE
router.delete('/:userId', verifyUser, deleteUser);

// GET
router.get('/:userId', verifyUserAndAdmin, getUser);

// GET ALL
router.get('/profile/all', verifyAdmin, getAllUsers);

// Login
router.post('/login', loginUser);

export default router;