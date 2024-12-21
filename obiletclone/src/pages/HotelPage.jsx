import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Select from '../components/Select'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import LoginNotifications from '../components/LoginNotifications'
import HotelSelect from '../components/HotelSelect'

const HotelPage = () => {
  return (
    <>
            <Header />
            <Navbar />
            <HotelSelect />
            <div className='flex mt-[100px] justify-center items-center w-full h-8'>
                <span className='text-3xl font-semibold text-gray-500'>Avantajlı Bir Tatil için Uygun Fiyatlı Oteller</span>
            </div>
            <Cards />
            <Footer/>
        </>
  )
}

export default HotelPage