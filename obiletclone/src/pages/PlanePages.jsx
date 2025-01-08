import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Select from '../components/Select'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
const PlanePages = () => {
    return (
        <>
            <Header/>
            <Navbar />
            <Select />
            <div className='flex mt-[100px] justify-center items-center w-full h-8'>
                <span className='text-3xl font-semibold text-gray-500'>
                <span className='text-gray-600'>Ucuz Uçak Bileti </span>
                Fiyatları obilet'te!</span>
            </div>
            <Cards/>
            <Footer/>   
        </>
    )
}

export default PlanePages;