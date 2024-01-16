import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    firstName: { type: String, required: true, min: 3, max: 65 },
    middleName: { type: String, min: 3, max: 65 },
    lastName: { type: String, required: true, min: 3, max: 65 },
    email: { type: String, required: true },
    passport: { type: String, min: 6, max: 6 },
    gender: { type: String, required: true },
    dob: { type: String, required: true },
    flightId: { type: String },
    category: { type: String },
    reference: { type: String },
}, { timestamps: true });

export default mongoose.model('Booking', BookingSchema);