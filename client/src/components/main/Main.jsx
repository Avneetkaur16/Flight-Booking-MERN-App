import React from 'react';
import './main.css';
import Footer from '../footer/Footer';
import { destinations } from './destinations';

const Main = () => {
  return (
    <div className='main_main'>
      <div className='main_heading'>
        <div className='main_heading_bar'></div>
          <h2>Popular Destinations</h2>
          <p>We have selected some best locations around the world for you</p>
      </div>

      <div className='main_container'>
        {destinations.map((dest) => (
            <div className='main_card' key={dest.id}>
              <img className='main_card_image' src={dest.img} alt='image' />
              <div className='main_card_info'>
                <h4>{dest.heading}</h4>
                <h3>{dest.name}</h3>
                <p className='main_card_rating'>{dest.rating}/5</p>
              </div>
            </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Main