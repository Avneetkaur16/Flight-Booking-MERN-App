import React from 'react';
import './search.css';
import Header from '../../components/header/Header';
import SearchedFlights from '../../components/searchedFlights/SearchedFlights';

const Search = () => {
  return (
    <div className='search_page_main'>
        <Header />
        <SearchedFlights />
    </div>
  )
}

export default Search