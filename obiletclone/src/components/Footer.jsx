import React from 'react'
import { MdOutlineTimer } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
import image from "../images/banka.png"

const Footer = () => {
  return (
    <>
      <div className="h-[90px] flex  justify-center ml-[460px] mr-[930px] ">
        <div className='text-kirmizi font-bold text-2xl ml-[388px] mt-[30px]'>
          obilet
        </div>
        <div className=' flex items-center text-gray-500 font-semibold text-xl ml-[235px] mt-[5px]'>
          <MdOutlineTimer />Hızlı
        </div>
        <div className='flex items-center text-gray-500 font-semibold text-xl ml-[235px] mt-[5px]'>
          <CiLock />Güvenilir
        </div>
        <div className='flex items-center text-gray-500 font-semibold text-xl ml-[235px] mt-[5px]'>
          <LuWallet />Ekonomik
        </div>
      </div>


      <div className='bg-white h-[390px] w-[1903px] flex'>
        {/* İlk Kısım */}
        <div className='ml-[390px]'>
          <div className='space-y-2'>
            <div className='text-gray-600 font-semibold text-sm'>obilet</div>
            <div className='text-gray-500 text-sm'>Uygun Otobüs Biletleri</div>
            <div className='text-gray-500 text-sm'>Bilet Al</div>
            <div className='text-gray-500 text-sm'>Otobüs Seferleri</div>
            <div className='text-gray-500 text-sm'>Tüm Duraklar</div>
            <div className='text-gray-500 text-sm'>Otobüs Firmaları</div>
            <div className='text-gray-500 text-sm'>Otogarlar</div>
            <div className='text-gray-500 text-sm'>Otobüs Bileti Alma Rehberi</div>
            <div className='text-gray-500 text-sm'>Otobüs Bileti Kampanyaları</div>
          </div>
        </div>



        {/* İkinci Kısım */}
        <div className='ml-[135px]'>
          <div className='space-y-2'>
            <div className='text-gray-600 font-semibold text-sm'>Popüler Otobüs Firmaları</div>
            <div className='text-gray-500 text-sm'>Varan Turizm</div>
            <div className='text-gray-500 text-sm'>Mar Grup</div>
            <div className='text-gray-500 text-sm'>Yatağan Koop</div>
            <div className='text-gray-500 text-sm'>Seç Turizm</div>
            <div className='text-gray-500 text-sm'>Ak Tur Turizm</div>
          </div>
        </div>


        <div className='ml-[140px]'>
          <div className='space-y-2'>
            <div className='text-gray-600 font-semibold text-sm'>obilet</div>
            <div className='text-gray-500 text-sm'>Otobüs Bileti</div>
            <div className='text-gray-500 text-sm'>Araç Kiralama</div>
            <div className='text-gray-500 text-sm'>Feribot Bileti</div>
            <div className='text-gray-500 text-sm'>Hakkımızda</div>
            <div className='text-gray-500 text-sm'>KVKK Aydınlatma Metni</div>
            <div className='text-gray-500 text-sm'>Bilgi Toplumu Hizmetleri</div>
            <div className='text-gray-500 text-sm'>Çerez Politikası</div>
            <div className='text-gray-500 text-sm'>Uçak Kullanım Koşullar ı</div>
            <div className='text-gray-500 text-sm'>Ödüllerimiz</div>
            <div className='text-gray-500 text-sm'>Yardım ve İletişim</div>
            <div className='text-gray-500 text-sm'>Bilet Sorgulama</div>
            <div className='text-gray-500 text-sm'>Araç Kiralama Şirketleri</div>
            <div className='text-gray-500 text-sm'>İstanbul Araç Kiralama</div>
          </div>
        </div>


        <div className='ml-[182px]'>
          <div className='space-y-2'>
            <div className='text-gray-600 font-semibold text-sm'>  Mobil Uygulamalar</div>
            <div className='text-gray-500 text-sm'> App Store</div>
            <div className='text-gray-500 text-sm'> Google Play</div>
            <div className='text-gray-500 text-sm'> AppGallery</div>
            <div className='text-gray-500 text-sm'> Twitter</div>
            <div className='text-gray-500 text-sm'> Facebook</div>
            <div className='text-gray-500 text-sm'> Instagram</div>
            <div className='text-gray-500 text-sm'> obilet Blog</div>
          </div>
        </div>
      </div>
      <div className=' h-[160px] w-[1903px] bg-white' >
      <div className='text-sm text-gray-500 ml-[1250px] '>Türkiye'nin güvenilir otobüs ve uçak bileti platformu.</div>
        <img src={image} className='ml-[380px]  mt-[25px] w-[350px] h-[65px]' />
        

        <div>
       
          <li className='text-sm text-gray-500 ml-[384px] mt-[25px]'>Obilet.com Turizm Seyahat Acentası (TÜRSAB Belge No: 9883)</li>
          <li className='text-sm text-gray-500 ml-[384px] '>Biletall Turizm Seyahat Acentası (TÜRSAB Belge No: 4443) | (IATA Üyelik No: 88214125)</li>
        </div>
       
      </div>

    </>
  )
}

export default Footer;