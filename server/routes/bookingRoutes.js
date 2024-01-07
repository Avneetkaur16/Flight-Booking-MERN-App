import express from "express";
import { verifyToken, verifyUserAndAdmin } from '../utils/verify.js';
import { deleteBooking, getBooking, newBooking } from "../controllers/bookingControllers.js";

const router = express.Router();

// CREATE
router.post('/new/:flightId', verifyToken, newBooking);

// GET
router.get('/mybooking/:bookingId/:userId', verifyUserAndAdmin, getBooking)

// DELETE
router.delete('/mybooking/:bookingId/:userId', verifyUserAndAdmin, deleteBooking);

export default router;