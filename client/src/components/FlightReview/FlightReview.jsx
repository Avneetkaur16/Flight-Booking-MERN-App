import React, { useContext, useEffect, useState } from 'react';
import './flightReview.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SelectedFlightContext } from '../../context/SelectedFlightContext';

const FlightReview = () => {
    const { flight_id } = useParams();
    const [flight, setFlight] = useState({});
    const navigate = useNavigate();
    const { selectedDispatch } = useContext(SelectedFlightContext);

    useEffect(() => {
        const flightReview = async() => {
            try {
                const { data } = await axios.get(`/flight/${flight_id}`);
                setFlight(data);
            } catch(error) {
                console.log(error);
            }
        }
        flightReview();
    }, [flight_id]);

    const handleSelect = async() => {
        try {
            selectedDispatch({ type: "FLIGHT_START" })
            selectedDispatch({ type: "FLIGHT_SUCCESS", payload: flight });
            navigate(`/checkout/${flight_id}`);
        } catch(error) {
            selectedDispatch({ type: "FLIGHT_FAILURE", payload: error });
        }
    }

  return (
    <div className='flight_review_main'>
        <h3>Review Flight Details</h3>
        {flight && 
            <div className='flight_review_container'>
                <h3>{flight?.origin?.time} - {flight?.destination?.time}</h3>
                <img src={flight?.airlineLogo} alt="airlineLogo" />

                <div className='flight_review_compo'>
                    <h4>${flight?.economy?.cost}</h4>
                    <p>Cabin: Economy</p>

                    <h4>Bags</h4>
                    <ul>
                        <li>Personal item included</li>
                        <li>Hand baggage included</li>
                        <li>1st checked bag included**</li>
                        <li><small>**Checked bag included up to 23 kg</small></li>
                    </ul>

                    <h4>Flexibility</h4>
                    <ul>
                        <li>Cancellation not allowed</li>
                        <li>Change fee applies</li>
                    </ul>
                    <button onClick={handleSelect}>Select</button>
                </div>
            </div>
        }
    </div>
  )
}

export default FlightReview