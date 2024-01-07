import './App.css';
import Home from './pages/home/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Search from './pages/search/Search';
import Flight from './pages/flight/Flight';
import Checkout from './pages/checkout/Checkout';
import Payment from './pages/payment/Payment';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/flight' element={<Flight />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment' element={<Payment />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
