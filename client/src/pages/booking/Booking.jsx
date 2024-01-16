import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './booking.css';

const Booking = () => {
    const { booking_id, user_id, flight_id } = useParams();

    const [user, setUser] = useState({});
    const [booking, setBooking] = useState({});
    const [flight, setFlight] = useState({});

    const pdfRef = useRef();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("user"));
        setUser(data);
    }, [])

    useEffect(() => {
        const fetchBooking = async() => {
            try {
                const { data } = await axios.get(`/booking/mybooking/${booking_id}/${user_id}`);
                setBooking(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchBooking()
    }, [booking_id, user_id]);

    useEffect(() => {
        const fetchFlight = async() => {
            try {
                const { data } = await axios.get(`/flight/${flight_id}`);
                setFlight(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchFlight();
    }, [flight_id]);

    const handleDownload = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL(`${flight.airlineLogo}/png`);
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save(`Invoice ${booking?.firstName} ${booking?.lastName}`)
        });
    }

    console.log(booking)
    console.log(flight)
    console.log(booking.flightId)

  return (
    <div className='booking-main'>
        <div className='booking-navbar'>
            <h4>{user?.firstName} {user?.lastName}</h4>
            <p onClick={handleDownload}>Click Here to Download</p>
        </div>
        <div className='booking-container' ref={pdfRef}>
                <h2>Flight Information</h2>
                <hr></hr>
                <br />
                <div className='booking-flight'>
                    <h4>Ticket Number: {booking?.reference}</h4>
                    <h4>Flight Number: {flight?.flightNumber}</h4>
                    <h4>Airline: {flight?.airline}</h4>
                    <img src={flight?.airlineLogo} alt='airlineLogo' />
                    <div className='booking-flight-location'>
                        <h4>From: </h4> <p>{flight?.origin?.airport}, {flight?.origin?.code} &#40;{flight?.origin?.city} {flight?.origin?.country}&#41;</p>
                        <h4>To: </h4><p>{flight?.destination?.airport}, {flight?.destination?.code} &#40;{flight?.destination?.city}, {flight?.destination?.country}&#41;</p>
                        <h4>Departure: </h4><p>{flight?.origin?.time}</p>
                        <h4>Arrival: </h4><p>{flight?.destination?.time}</p>
                    </div>
                </div>
                <div className='booking-passenger'>
                    <h4>Name: {booking?.firstName} {booking?.middleName ? booking?.middleName : ''} {booking?.lastName}</h4>
                    <h4>Gender: {booking?.gender}</h4>
                    <h4>Date of Birth: {booking?.dob}</h4>
                </div>
        </div>
    </div>
  )
}

export default Booking