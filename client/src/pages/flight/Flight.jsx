import React from 'react';
import './flight.css';
import Navbar from '../../components/navbar/Navbar';
import FlightReview from '../../components/FlightReview/FlightReview';

const Flight = () => {
  return (
    <div>
      <Navbar />
      <FlightReview />
    </div>
  )
}

export default Flight