import React from 'react';
import './banner.css';
import airplaneImage from '../../assets/airplaneImage.jpg';

const Banner = () => {
  return (
    <div className='banner_main'>
        <img className='banner_image' src={airplaneImage} alt='airplaneImage' />
        <h1 className='banner_heading'>Best Flight Booking Experience</h1>
    </div>
  )
}

export default Banner