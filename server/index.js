import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import flightRoutes from './routes/flightRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/flight', flightRoutes);
app.use('/booking', bookingRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database Connected');
    } catch (error) {
        throw error;
    };
};

app.listen(process.env.PORT || 8080, (error) => {
    connect();
    console.log(`Server started on port ${process.env.PORT || 8080}`);
    if (error) {
        console.log(error);
    }
})