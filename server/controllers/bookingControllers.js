import flights from "../models/flights.js";
import bookings from "../models/bookings.js";
import users from "../models/users.js";

// ADMIN + LOGGED IN USER
export const newBooking = async(req, res) => {
    const { flightId } = req.params;
    const { firstName, lastName, middleName, email, passport, gender, dob, category } = req.body;
    try {
        const f = await flights.findById(flightId);
        const airline = f.airline.split(' ');

        const date = new Date();
        const ref = `${airline[0][0]}${airline[0][1].toLocaleUpperCase()}${date.getDate().toString()}${date.getMonth()}${date.getHours()}${date.getSeconds()}`;
        if (airline.length >= 2) {
            ref = `${airline[0][0]}${airline[1][0]}${date.getDate().toString()}${date.getMonth()}${date.getHours()}${date.getSeconds()}`;
        }

        const createdBooking = new bookings({ firstName: firstName, lastName: lastName, middleName: middleName,
            email: email, passport: passport, gender: gender, dob: dob, flightId: flightId, category: category, reference: ref});

        await createdBooking.save();

        // Add the passenger to flights database
        await flights.findByIdAndUpdate(flightId, {
            $push: { passengers: createdBooking._id }
        }, { new: true });

        // Update seats in flights database
        await flights.findByIdAndUpdate(flightId, {
            $set: { seats: f.seats - 1 }
        });

        // Adding booking to the user's profile
        const user = await users.findByIdAndUpdate(req.user.id, {
            $push: { bookingIds: createdBooking._id }
        }, { new: true });

        res.status(200).json(createdBooking, user);

    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// ADMIN + LOGGED IN USER
export const getBooking = async(req, res) => {
    const { bookingId } = req.params;
    try {
        const myBooking = await bookings.findById(bookingId);
        res.status(200).json(myBooking); 

    } catch (error) {
        res.status(500).json(error);
    }
}

// ADMIN + LOGGED IN USER
export const deleteBooking = async(req, res) => {
    const { bookingId } = req.params;
    try {
        const booking = await bookings.findById(bookingId);
        const flight = await flights.findById(booking.flightId);
        const seats = flight.seats;
        const updatedFlight = await flights.findByIdAndUpdate(flight._id, {
            $set: { seats: seats + 1 }
        }, { new: true });
        res.status(200).json(updatedFlight);

        const user = await users.findByIdAndUpdate(req.user.id, {
            $pull: { bookingIds: bookingId }
        }, { new: true });

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json(error)
    }
}
