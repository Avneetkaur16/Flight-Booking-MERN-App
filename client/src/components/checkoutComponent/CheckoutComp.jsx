import React from 'react';
import './checkoutcompo.css';
import AmericanAirlinesLogo from '../../assets/AmericanAirlinesLogo.png'

const CheckoutComp = () => {
  return (
    <div className='checkout-main'>
        <div className='checkout-info'>
            <h2 className='checkout-info-header'>Dallas to San Francisco</h2>
            <div className='checkout-info-details'>
                <p style={{ color: 'gray' }}>4:53pm - 6:53pm</p>
                <div className='checkout-info-details-flight'>
                    <img src={AmericanAirlinesLogo} alt='airlineLogo' />
                    <p>Sat, Jan 20, 2023</p>
                </div>
                <br />
                <div className='checkout-info-details-flight-time'>
                    <h4>4:53pm - Dallas</h4>
                    <p>Dallas-Fort Worth Intl. DFW</p>
                    <p>American Airlines 2810</p>
                    <p>Economy</p>
                    <br />

                    <h4>6:53pm - San Francisco</h4>
                    <p>San Francisco Intl. SFO</p>
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
                <div className='checkout-price-traveler'>
                    <p>Traveler 1</p>
                    <p>$179.10</p>
                </div>
                <div className='checkout-price-traveler'>
                    <p>Traveler 2</p>
                    <p>$179.10</p>
                </div>
                <div className='checkout-price-traveler'>
                    <p>Traveler 3</p>
                    <p>$179.10</p>
                </div>
                <hr></hr>
                <div className='checkout-price-total'>
                    <h5>Trip total</h5>
                    <h5>$537.30</h5>
                </div>
                
            </div>
            <button className='checkout-button'>Check out</button>
        </div>
    </div>
  )
}

export default CheckoutComp