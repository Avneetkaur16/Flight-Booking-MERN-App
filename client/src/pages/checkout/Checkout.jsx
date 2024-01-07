import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import CheckoutComp from '../../components/checkoutComponent/CheckoutComp';
import './checkout.css'

const Checkout = () => {
  return (
    <div className='checkout-page-main'>
      <Navbar />
      <CheckoutComp />
    </div>
  )
}

export default Checkout