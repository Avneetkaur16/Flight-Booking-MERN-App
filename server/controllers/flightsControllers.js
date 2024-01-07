import flights from "../models/flights.js";

// ADMIN
export const createFlight = async (req, res) => {
    try {
        const newFlight = new flights(req.body);
        await newFlight.save();
        res.status(201).json(newFlight);

    } catch (error) {
        res.status(500).json(error);
    }
}

// PUBLIC
export const searchFlight = async(req, res) => {
    const { origin, destination, date, seats, category } = req.params;
    
    try {
        
        const flightsArr = await flights.find({ "origin.city": origin, "destination.city": destination, "origin.date": date, "economy.seats": { $gte: seats } });
        res.status(200).json(flightsArr);
        if (category === "business") {
            const flightsArr = await flights.find({ "origin.city": origin, "destination.city": destination, "origin.date": date, "business.seats": { $gte: seats } });
            res.status(200).json(flightsArr);
        }

    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

// PUBLIC
export const getFlight = async(req, res) => {
    const { flightId } = req.params;
    try {
        const flight = await flights.findById(flightId);
        const { passengers, ...flightDetails } = flight._doc;

        res.status(200).json({ ...flightDetails });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// ADMIN
export const editFlight = async(req, res) => {
    const { flightId } = req.params;
    try {
        const flightDetails = await flights.findByIdAndUpdate(flightId, {
            $set: req.body
        }, { new: true });
        res.status(200).json(flightDetails);
    } catch(error) {
        res.status(500).json(error);
    }
}

// ADMIN
export const getAllFlights = async(req, res) => {
    try {
        const allFlights = await flights.find({});
        res.status(200).json(allFlights);
    } catch (error) {
        res.status(500).json(error);
    }
}

// ADMIN
export const deleteFlight = async(req, res) => {
    const { flightId } = req.params;
    try {
        await flights.findByIdAndDelete(flightId);
        res.status(200).json({ message: 'Flight Deleted' })
    } catch (error) {
        res.status(500).json(error);
    }
}