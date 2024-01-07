import React from 'react'
import Navbar from '../navbar/Navbar'
import Banner from '../banner/Banner'
import Search from '../search/Search'

const Header = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Search />
    </div>
  )
}

export default Header