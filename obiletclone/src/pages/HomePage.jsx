import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Select from '../components/Select'
import Cards from '../components/Cards'

const HomePage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Select />
            <div className='flex mt-[100px] justify-center items-center w-full h-8'>
                <span className='text-3xl font-semibold text-gray-500'>Türkiye'nin Önde Gelen <span className='text-gray-600'>Otobüs Bileti</span> Sitesi</span>
            </div>
            <Cards />
        </>
    )
}

export default HomePage