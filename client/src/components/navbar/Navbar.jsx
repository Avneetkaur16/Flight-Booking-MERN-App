import React from 'react';
import planeLogo from '../../assets/planeLogo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar_main'>
        <div className='navbar_container'>
          <img className='navbar_logo' src={planeLogo} alt='logo' />
          <h2>SkyProbe</h2>
        </div>
        <p className='navbar_auth'>Login or Register</p>
    </div>
  )
}

export default Navbar