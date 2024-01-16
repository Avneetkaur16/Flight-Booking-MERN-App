import React, { useContext, useState } from 'react';
import './paymentcompo.css';
import axios from 'axios';
import { SeatsContext } from '../../context/SeatsContext';
import { SelectedFlightContext } from '../../context/SelectedFlightContext';

const PaymentCompo = () => {
  const { seats } = useContext(SeatsContext);
  const { selectedFlight } = useContext(SelectedFlightContext);
  console.log(selectedFlight)
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
    const date = selectedFlight?.origin?.date.slice(8, 10);
    const monthNum = selectedFlight?.origin?.date.slice(5, 7);
    const year = selectedFlight?.origin?.date.slice(0, 4);

    const [travelers, setTravelers] = useState([]);
    const [traveler, setTraveler] = useState({ firstName: '', lastName: '', middleName: '', email: '', passport: '', gender: '', dob: '' });
    console.log(traveler);

    const handleSave = (e) => {
      e.preventDefault();
      setTravelers(prev => [...prev, traveler]);
      console.log(travelers);
    }

    console.log(travelers);

    const handleBooking = (e) => {
      e.preventDefault();
      travelers.forEach(passenger => {
        createBooking(passenger)
      });
    }

    const createBooking = async(passenger) => {
      try {
        const { data } = await axios.post(`/booking/new/${selectedFlight._id}`, passenger);
        console.log(data);
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div className='payment-main'>
      <div className='payment-pricelist'>
        <h3>Flight</h3>
        <small>{seats} tickets</small>
        <hr></hr>
        <h3>{selectedFlight?.origin?.city} {selectedFlight?.origin?.code} to {selectedFlight?.destination?.city} {selectedFlight?.destination?.code}</h3>
        <p>{month[monthNum]} {date} {year}</p>
        <p>{selectedFlight?.origin?.time} - {selectedFlight?.destination?.time}</p>
        <img src={selectedFlight?.airlineLogo} alt='airlineLogo' />
        <br/>
        <hr></hr>

        <div className='payment-list'>
          {Array(seats).fill(true).map((item, index) => (
            <div className='payment-list-item' key={index}>
              <p>Traveler {index + 1}</p>
              <p>${selectedFlight?.economy?.cost}</p>
          </div>
          ))}
          <hr></hr>
          <br />

          <div className='payment-list-item'>
            <p style={{ fontWeight: '700' }}>Total</p>
            <p style={{ fontWeight: '700' }}>${selectedFlight?.economy?.cost * seats}</p>
          </div>
        </div>
      </div>

      <div className='payment-travelers'>
        <h3> Who's traveling?</h3>
        <p style={{ color: 'gray' }}>Traveler names must match government-issued photo ID exactly.</p>

        {Array(seats).fill(true).map((item, index) => (
          <form className='payment-traveler' key={index}>
            <h4>Traveler {index + 1}</h4>
            <div className='payment-traveler-name'>
              <label htmlFor='first'>First Name</label>
              <input className='payment-input' onChange={(e) => setTraveler({ ...traveler, firstName: e.target.value })} type='text' id='first' required />
              <label htmlFor='middle'>Middle Name</label>
              <input className='payment-input' onChange={(e) => setTraveler({ ...traveler, middleNameName: e.target.value })} type='text' id='middle' />
              <label htmlFor='last'>Last Name</label>
              <input className='payment-input' onChange={(e) => setTraveler({ ...traveler, lastName: e.target.value })} type='text' id='last' required />
            </div>
            <label htmlFor='email'>Email</label>
            <input className='payment-input' onChange={(e) => setTraveler({ ...traveler, email: e.target.value })} id='email' type='email' placeholder='Email for confirmation' required />

            <label htmlFor='number'>Passport No.</label>
            <input className='payment-input' onChange={(e) => setTraveler({ ...traveler, passport: e.target.value })} type='text' id='number' placeholder='Passport' required />
            <p style={{ fontWeight: '600', color: 'rgb(50, 50, 50)' }}>Gender</p>
            <div className='payment-traveler-gender'>
              <label><input type='radio' name='gender' value='Male' onChange={(e) => setTraveler({ ...traveler, gender: e.target.value })}></input>Male</label>
              <label><input type='radio' name='gender' value='Female' onChange={(e) => setTraveler({ ...traveler, gender: e.target.value })}></input>Female</label>
            </div>
            <label htmlFor='date'>Date of Birth</label>
            <input className='payment-input' onChange={(e) => setTraveler({ ...traveler, dob: e.target.value })} type='date' id='date' />
            <button type='submit' onClick={handleSave}>Save</button>
          </form>
        ))}
      </div>

      <div className='payment-card'>
        <h3>Complete Payment</h3>
        <br />
        <hr></hr>
        <br />
        <form className='payment-card-info'>
          <label htmlFor='name'>Name on Card</label>
          <input className='payment-input' type='text' id='name' required/>
          <label htmlFor='card'>Debit/Credit card number</label>
          <input className='payment-input' type='text' id='card' required />
          <label>Expiration Date</label>
          <div className='payment-card-info-date'>
            <select className='payment-input'>
              <option defaultValue>Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <select className='payment-input'>
              <option defaultValue>Year</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
              <option>2031</option>
              <option>2032</option>
              <option>2033</option>
              <option>2024</option>
            </select>
          </div>
          <label htmlFor='code'>Security Code</label>
          <input className='payment-input' type='password' max={3} min={3} style={{ width: '100px' }} />
          </form>
          <button className='payment-button' onClick={handleBooking}>Complete Booking</button>
      </div>
    </div>
  )
}

export default PaymentCompo