import React, { useEffect, useState } from 'react';
import axios from 'axios';
import'./user.css';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState({});
  const [bookingIds, setBookingIds] = useState([]);
  const [bookings, setBookings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"))
    setUser(data);
  }, []);

  useEffect(() => {
    user?.bookingIds && user?.bookingIds?.forEach((booking) => {
      setBookingIds((prev) => [...prev, booking]);
    })
  }, [user]);

  useEffect(() => {
    const fetchBooking = async(bookingID) => {
      try {
        const { data } = await axios.get(`/booking/mybooking/${bookingID}/${user._id}`);
        setBookings((prev) => [...prev, data]);
      } catch (error) {
        console.log(error);
      }
    }

    bookingIds.forEach((bookingID) => {
      fetchBooking(bookingID)
    })
  }, [bookingIds, user._id]);

  const handleLogout = () => {
    localStorage.setItem("user", null);
    navigate('/');
  }

  return (
    <div className='user-main'>
      <div className='user-navbar'>
        <h2>Welcome, {user?.firstName} {user?.lastName}</h2>
        <p onClick={handleLogout}>Logout</p>
      </div>
      
      <h3 className='user-booking-header'>All Bookings</h3>
      <div className='user-bookings'>
        {bookings ? bookings.map((item) => (
          <div className='user-booking' key={item._id} onClick={() => navigate(`/booking/${item._id}/${user._id}/${item.flightId}`)}>
            <h4>Booking {item.reference}</h4>
            <p>{item.firstName} {item.lastName}</p>
            <small>Created On {item?.createdAt.split('').splice(0, 10)}</small>
          </div>
        )) : (<p>No Bookings</p>)}
      </div>      
    </div>
  )
}

export default User