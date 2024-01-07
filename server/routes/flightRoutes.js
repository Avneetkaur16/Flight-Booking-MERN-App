import express from 'express';
import { createFlight, deleteFlight, editFlight, getAllFlights, getFlight, searchFlight } from '../controllers/flightsControllers.js';
import { verifyAdmin } from '../utils/verify.js';

const router = express.Router();

// CREATE (Admin route)
router.post('/create', verifyAdmin, createFlight);

// UPDATE (Admin Route)
router.put('/edit/:flightId', verifyAdmin, editFlight);

// GET ALL (Admin Route)
router.get('/all', verifyAdmin, getAllFlights);

// GET (Public Route)
router.get('/search/:origin/:destination/:date/:seats/:category?', searchFlight)

// GET (Public Route)
router.get('/:flightId', getFlight);

// DELETE (Admin Route)
router.delete('/delete/:flightId', verifyAdmin, deleteFlight);

export default router;