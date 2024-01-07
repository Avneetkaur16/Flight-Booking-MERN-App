import React from 'react';
import './flightReview.css';
import AmericanAirlinesLogo from '../../assets/AmericanAirlinesLogo.png';

const FlightReview = () => {
  return (
    <div className='flight_review_main'>
        <h3>Review Flight Details</h3>
        <div className='flight_review_container'>
            <h3>08:35 - 21:35</h3>
            <img src={AmericanAirlinesLogo} alt="logo" />

            <div className='flight_review_compo'>
                <h4>$500.00</h4>
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
                <button>Select</button>
            </div>
            
        </div>
    </div>
  )
}

export default FlightReview