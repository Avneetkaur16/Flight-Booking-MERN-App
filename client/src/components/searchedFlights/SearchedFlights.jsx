import React, { useContext } from 'react';
import './searchedFlights.css';
import { SearchContext } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';

const SearchedFlights = () => {
    const { flights } = useContext(SearchContext);
    console.log(flights)

    const navigate = useNavigate();
  return (
    <div className='searched_flights_main'>
        <h2>Searched Flights</h2>
        {flights && flights.map((flight, key) => (
            <div className='searched_flights_compo' onClick={() => navigate(`/flight/${flight._id}`)} key={key}>
                <div className='searched_flights_left'>
                    <h4>{flight?.origin?.time} - {flight?.destination?.time}</h4>
                    <p>{flight?.origin?.city} - {flight?.destination?.city}</p>
                    <p>25h 34m</p>
                    <div className='searched_flights_airline'>
                        <img src={flight?.airlineLogo} alt="airlineLogo" />
                        <p>{flight?.airline}</p>
                    </div>
                </div>
                <div className='searched_flights_right'>
                    <h3>${flight?.economy?.cost}</h3>
                    <small>Per Ticket</small>
                </div>
            </div>
        ))}
    </div>
  )
}

export default SearchedFlights