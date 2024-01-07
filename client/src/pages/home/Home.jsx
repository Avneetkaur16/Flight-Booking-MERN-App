import React from 'react';
import './home.css';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';

const Home = () => {
  return (
    <div className='home_main'>
        <Header />
        <Main />
    </div>
  )
}

export default Home