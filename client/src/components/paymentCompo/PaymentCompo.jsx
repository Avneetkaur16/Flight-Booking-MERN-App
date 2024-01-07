import React from 'react';
import './paymentcompo.css';
import AmericanAirlinesLogo from '../../assets/AmericanAirlinesLogo.png';

const PaymentCompo = () => {
  return (
    <div className='payment-main'>
      <div className='payment-pricelist'>
        <h3>Flight</h3>
        <small>5 tickets</small>
        <hr></hr>
        <h3>Dallas DFW to San Francisco SFO</h3>
        <p>Sat, Jan 20 2023</p>
        <p>4:53pm - 6:53pm</p>
        <img src={AmericanAirlinesLogo} alt='airlineLogo' />
        <br/>
        <hr></hr>
        <div className='payment-list'>
          <div className='payment-list-item'>
            <p>Traveler 1</p>
            <p>$179.10</p>
          </div>
          <div className='payment-list-item'>
            <p>Traveler 2</p>
            <p>$179.10</p>
          </div>
          <div className='payment-list-item'>
            <p>Traveler 3</p>
            <p>$179.10</p>
          </div>
          <div className='payment-list-item'>
            <p>Traveler 4</p>
            <p>$179.10</p>
          </div>
          <div className='payment-list-item'>
            <p>Traveler 5</p>
            <p>$179.10</p>
          </div>
          <hr></hr>
          <br />
          <div className='payment-list-item'>
            <p style={{ fontWeight: '700' }}>Total</p>
            <p style={{ fontWeight: '700' }}>$895.50</p>
          </div>
        </div>
      </div>
      <div className='payment-travelers'>
        <h3> Who's traveling?</h3>
        <p style={{ color: 'gray' }}>Traveler names must match government-issued photo ID exactly.</p>
        <div className='payment-traveler'>
          <h4>Traveler 1</h4>
          <div className='payment-traveler-name'>
            <label htmlFor='first'>First Name</label>
            <input className='payment-input' type='text' id='first' required />
            <label htmlFor='middle'>Middle Name</label>
            <input className='payment-input' type='text' id='middle' />
            <label htmlFor='last'>Last Name</label>
            <input className='payment-input' type='text' id='last' required />
          </div>
          <label htmlFor='email'>Email</label>
          <input className='payment-input' id='email' type='email' placeholder='Email for confirmation' required />
          <label htmlFor='country'>Country/Territory Code</label>
          <select className='payment-input' id='country'>
            <option id='unitedstates'>United States +1</option>
            <option id='canada'>Canada +1</option>
            <option id='unitedkingdom'>United Kingdom +44</option>
            <option id='india'>India +91</option>
          </select>
          <label htmlFor='number'>Phone number</label>
          <input className='payment-input' type='text' id='number' placeholder='In case we need to reach you' required />
          <form className='payment-traveler-gender'>
            <p style={{ fontWeight: '600', color: 'rgb(50, 50, 50)' }}>Gender</p>
            <input type='radio' id='male' value='Male' />
            <label htmlFor='male'>Male</label>
            <input type='radio' id='female' value='Female'/>
            <label htmlFor='female'>Female</label>
          </form>
          <label htmlFor='date'>Date of Birth</label>
          <input className='payment-input' type='date' id='date' />
        </div>
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
            </select>
            <select className='payment-input'>
              <option defaultValue>Year</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </select>
          </div>
          <label htmlFor='code'>Security Code</label>
          <input className='payment-input' type='password' max={3} min={3} style={{ width: '100px' }} />
        </form>
      </div>
      <button className='payment-button'>Complete Booking</button>
    </div>
  )
}

export default PaymentCompo