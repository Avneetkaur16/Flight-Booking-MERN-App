import React, { useContext } from 'react';
import './checkoutcompo.css';
import { SeatsContext } from '../../context/SeatsContext';
import { SelectedFlightContext } from '../../context/SelectedFlightContext';
import { useNavigate } from 'react-router-dom';

const CheckoutComp = () => {

    const month = {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec'
    }

    const navigate = useNavigate();

    const { seats } = useContext(SeatsContext);
    const { selectedFlight } = useContext(SelectedFlightContext);

    const total = seats * selectedFlight?.economy?.cost;

    const date = selectedFlight?.origin?.date.slice(8, 10);
    const monthNum = selectedFlight?.origin?.date.slice(5, 7);
    const year = selectedFlight?.origin?.date.slice(0, 4);

    console.log(selectedFlight);
    console.log(month[monthNum]);
    
  return (
    <div className='checkout-main'>
        <div className='checkout-info'>
            <h2 className='checkout-info-header'>{selectedFlight?.origin?.city} to {selectedFlight?.destination?.city}</h2>
            <div className='checkout-info-details'>
                <p style={{ color: 'gray' }}>{selectedFlight?.origin?.time} - {selectedFlight?.destination?.time}</p>
                <div className='checkout-info-details-flight'>
                    <img src={selectedFlight?.airlineLogo} alt='airlineLogo' />
                    <p>{month[monthNum]} {date}, {year}</p>
                </div>
                <br />
                <div className='checkout-info-details-flight-time'>
                    <h4>{selectedFlight?.origin?.time} - {selectedFlight?.origin?.city}</h4>
                    <p>{selectedFlight?.origin?.airport} {selectedFlight?.origin?.code}</p>
                    <p>{selectedFlight?.airline} {selectedFlight?.flightNumber}</p>
                    <p>Economy</p>
                    <br />

                    <h4>{selectedFlight?.destination?.time} - {selectedFlight?.destination?.city}</h4>
                    <p>{selectedFlight?.destination?.airport}</p>
                </div>
                <br />
                <div className='checkout-bag'>
                    <h4>Bags</h4>
                    <ul>
                        <li>Personal item included</li>
                        <li>Carry-on bag included</li>
                        <li>1st checked bag for a fee</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='checkout-price'>
            <h2>Price Summary</h2>
            <br />
            <div className='checkout-price-travelers'>
                {Array(seats).fill(true).map((item, index) => (
                    <div className='checkout-price-traveler' key={index}>
                        <p>Traveler {index + 1}</p>
                        <p>${selectedFlight?.economy?.cost}</p>
                    </div>
                ))}
                <hr></hr>
                <div className='checkout-price-total'>
                    <h5>Trip total</h5>
                    <h5>${total}</h5>
                </div>
                
            </div>
            <button className='checkout-button' onClick={() => navigate(`/payment/${selectedFlight?._id}`)}>Check out</button>
        </div>
    </div>
  )
}

export default CheckoutComp