import express from 'express';
import { createAdmin, deleteAdmin, getAdmin, getAllAdmins, loginAdmin, updateAdmin } from '../controllers/adminController.js';
import { validator } from '../utils/validator.js';
import { verifyAdmin, verifyAdminProfile } from '../utils/verify.js';
import { check } from 'express-validator';

const router = express.Router();

// CREATE
router.post('/create', [
    check('firstName', 'Required').isLength({ min: 1, max: 65 }),
    check('lastName', 'Required').isLength({ min: 1, max: 65 }),
    check('username', 'Required').isLength({ min: 5, max: 10 }),
    check('email', 'Required').isEmail(),
    check('password', 'Must be atleast 8 characters').isLength({ min: 8, max: 16 }).isAlphanumeric(),
], validator, verifyAdmin, createAdmin);

// UPDATE
router.put('/edit/:adminId', [
    check('firstName', 'Required').isLength({ min: 1, max: 65 }),
    check('lastName', 'Required').isLength({ min: 1, max: 65 }),
    check('username', 'Required').isLength({ min: 8, max: 16 }),
    check('email', 'Required').isEmail(),
    check('password', 'Must be atleast 8 characters').isLength({ min: 8, max: 16 }).isAlphanumeric(),
], validator, verifyAdminProfile, updateAdmin);

// DELETE
router.delete('/delete/:adminId', verifyAdmin, deleteAdmin)

// GET
router.get('/profile/:adminId', verifyAdmin, getAdmin);

// GET ALL
router.get('/all', verifyAdmin, getAllAdmins);

// LOGIN
router.post('/login', [
    check('username', 'Required').isLength({ min: 8, max:16 }),
    check('password', 'Required').isLength({ min: 8, max: 16 })
], validator, loginAdmin);

export default router;