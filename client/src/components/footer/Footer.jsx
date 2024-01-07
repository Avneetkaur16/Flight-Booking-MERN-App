import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer_main'>
      <h3>SkyProbe</h3>
        <div className='footer_info'>
          <ul>
            <li>Flights</li>
            <li>About</li>
            <li>Contact</li>
            <li>Feedback</li>
          </ul>
        </div>
        <br />
        <div className='footer_container'>
            <ul className='footer_content'>
              <li>American Airlines</li>
              <li>British Airways</li>
              <li>Qatar Airways</li>
              <li>Emirates</li>
              <li>Lufthansa</li>
            </ul>    
            <ul className='footer_content'>
              <li>American Airlines</li>
              <li>British Airways</li>
              <li>Qatar Airways</li>
              <li>Emirates</li>
              <li>Lufthansa</li>
            </ul>    
            <ul className='footer_content'>
              <li>American Airlines</li>
              <li>British Airways</li>
              <li>Qatar Airways</li>
              <li>Emirates</li>
              <li>Lufthansa</li>
            </ul>    
        </div>
        <div className='footer_footer'>
          <p>SkyProbe</p>
          <p>&copy; All Rights Reserved 2023</p>
        </div>
    </div>
  )
}

export default Footer