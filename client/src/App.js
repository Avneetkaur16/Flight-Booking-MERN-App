import './App.css';
import Home from './pages/home/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Search from './pages/search/Search';
import Flight from './pages/flight/Flight';
import Checkout from './pages/checkout/Checkout';
import Payment from './pages/payment/Payment';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import User from './pages/user/User';
import Booking from './pages/booking/Booking';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/flight/:flight_id' element={<Flight />} />
        <Route path='/checkout/:flight_id' element={<Checkout />} />
        <Route path='/payment/:flight_id' element={<Payment />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user/:user_id' element={<User />} />
        <Route path='/booking/:booking_id/:user_id/:flight_id' element={<Booking />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
