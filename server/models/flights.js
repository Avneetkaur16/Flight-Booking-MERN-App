import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
    flightNumber: { type: String, required: true, min: 4 },
    airline: { type: String, required: true, min: 3 },
    airlineLogo: { type: String, required: true },
    origin: {
        city: { type: String, required: true, min: 3 },
        airport: { type: String, required: true, min: 3 },
        code: { type: String, required: true, min: 3, max: 3 },
        country: { type: String, required: true, min: 3 },
        date: { type: Date, required: true },
        time: { type: String, required: true },
        timezone: { type: String, required: true }
    },
    destination: {
        city: { type: String, required: true, min: 3 },
        airport: { type: String, required: true, min: 3 },
        code: { type: String, required: true, min: 3, max: 3 },
        country: { type: String, required: true, min: 3 },
        date: { type: Date, required: true },
        time: { type: String, required: true },
        timezone: { type: String, required: true }
    },
    economy: {
        cost: { type: Number, required: true },
    },
    business: {
        cost: { type: Number, required: true },
    },
    seats: { type: Number, required: true },
    passengers: [String], 
}, { timestamps: true });

export default mongoose.model('Flight', FlightSchema);