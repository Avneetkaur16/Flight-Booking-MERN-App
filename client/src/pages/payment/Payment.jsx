import React from 'react';
import './payment.css';
import Navbar from '../../components/navbar/Navbar';
import PaymentCompo from '../../components/paymentCompo/PaymentCompo';

const Payment = () => {
  return (
    <div>
        <Navbar />
        <PaymentCompo />
    </div>
  )
}

export default Payment