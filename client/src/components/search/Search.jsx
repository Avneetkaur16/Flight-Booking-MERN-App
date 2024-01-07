import React, { useState } from 'react'
import './search.css';

const Search = () => {
    const [search, setSearch] = useState({ origin: ' ', destination: ' ', date: ' ', seats: 1, category: 'Economy' });
    const [count, setCount] = useState(search.seats);

    console.log(search);
  return (
    <>
    <div className='search_main'>
        <div className='search_field'>
            <label name="origin">Origin</label>
            <input id="origin" type="text" value={search.origin} onChange={(e) => setSearch({ ...search, origin: e.target.value })} />
        </div>
        <div className='search_field'>
            <label name="destination">Destination</label>
            <input id="destination" type="text" value={search.destination} onChange={(e) => setSearch({ ...search, destination: e.target.value })} />
        </div>
        <div className='search_field'>
            <label name="date">Date</label>
            <input id="date" type="date" value={search.date} onChange={(e) => setSearch({ ...search, date: e.target.value })} />
        </div>
        <div className='search_field'>
            <label name="seats">Seats</label>
            <input id="seats" type="text" value={count} onChange={(e) => setSearch({ ...search, seats: e.target.value })} />
            <div className='search_seats'>
                <button value={count} onClick={() => setCount((prev) => prev + 1)}>+</button>
                <button value={count} onClick={() => count > 1 ? setCount((prev) => prev - 1) : setCount(1)}>-</button>
            </div>
        </div>
        <div className='search_field'>
            <label name="category">Category</label>
            <select value={search.category} onChange={(e) => setSearch({ ...search, category: e.target.value })}>
                <option>Economy</option>
                <option>Business</option>
            </select>
        </div>
        <div className='search_field'>
            <button className='search_button'>Search</button>
        </div>
    </div>
    </>
  )
}

export default Search