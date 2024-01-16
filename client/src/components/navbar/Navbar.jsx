import React, { useEffect, useState } from 'react';
import planeLogo from '../../assets/planeLogo.png';
import './navbar.css';

const Navbar = () => {

  const [user, setUser] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, [])

  return (
    <div className='navbar_main'>
        <div className='navbar_container'>
          <img className='navbar_logo' src={planeLogo} alt='logo' />
          <h2>SkyProbe</h2>
        </div>
        <p className='navbar_auth'><a href={user ? `/user/${user?._id}` : '/login'}>{user ? `@${user?.username}`: 'Login'}</a></p>
    </div>
  )
}

export default Navbar