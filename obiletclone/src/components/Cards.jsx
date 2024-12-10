import React from 'react'
import card1 from "../images/card1.png"
import card2 from "../images/card2.png"
import card3 from "../images/card3.png"
import card4 from "../images/card4.png"
import bankkart from "../images/bankkart.png"
function Cards() {
    return (
        <>
            <div className=' rounded-2xl w-[1140px] h-[350px] bg-cardbggri  mt-[10px] ml-[376px]' >
                <div className='flex gap-4 mt-6 justify-center items-center '>


                    <div className='w-[265px]  shadow-sm h-[300px] border mt-6 bg-white rounded-lg flex flex-col'>
                        <img src={card1} alt="" className='w-[150px] h-[125px] ml-[56px] mt-[16px]' />

                        <div className='ml-[40px] '>
                            <span className='text-base font-bold text-gray-500 '>7/24 Müşteri Hizmetleri</span>
                        </div>
                        <div className='mt-2'>
                            <span className="text-sm text-gray-600">
                                <span className='flex justify-center'>obilet.com ve obilet mobil</span>
                                <span className='flex justify-center'>uygulamaları üzerinden yapacağınız</span>
                                <span className='flex justify-center'> tüm işlemlerde müşteri hizmetleri</span>
                                <span className='flex justify-center'>ekibimiz 7/24 yanınızda. Bir tıkla </span>
                                <span className='flex justify-center'>destek ekibimize bağlanabilirsiniz.</span>
                            </span>
                        </div>
                    </div>



                    <div className='w-[265px]  shadow-sm h-[300px] border mt-6 bg-white rounded-lg'>
                        <img src={card2} alt="" className='w-[150px] h-[125px] ml-[56px] mt-[16px]' />
                        <div className='ml-[40px]'>
                            <span className='text-base font-bold ml-8  text-gray-500 '>Güvenli Ödeme</span>
                        </div>
                        <div className='mt-2'>
                            <span className="text-sm text-gray-600">
                                <span className='flex justify-center'>Tüm otobüs bilet alım işlemlerinizi</span>
                                <span className='flex justify-center'>ister evinizden, ister ofisinizden ya da</span>
                                <span className='flex justify-center'> dilerseniz cep telefonunuzdan kolay,</span>
                                <span className='flex justify-center'>hızlı ve güvenilir bir şekilde </span>
                                <span className='flex justify-center'>gerçekleştirebilirsiniz.</span>
                            </span>
                        </div>
                    </div>




                    <div className='w-[265px]  shadow-sm h-[300px] border mt-6 bg-white rounded-lg'>
                        <img src={card3} alt="" className='w-[150px] h-[125px] ml-[56px] mt-[16px]' />
                        <div className='ml-[40px]'>
                            <span className='text-base font-bold ml-10 text-gray-500 '>Bütçe Dostu</span>
                        </div>
                        <div className='mt-2'>
                            <span className="text-sm text-gray-600">
                                <span className='flex justify-center'>obilet size tüm firmaların otobüs</span>
                                <span className='flex justify-center'>biletlerini sorgulama ve karşılaştırma</span>
                                <span className='flex justify-center'>imkanı sunar. Bu sayede bütçenize</span>
                                <span className='flex justify-center'>uygun otobüs biletini rahatlıkla </span>
                                <span className='flex justify-center'>bulabilir ve satın alabilirsiniz.</span>
                            </span>
                        </div>
                    </div>



                    <div className='w-[265px]  shadow-sm h-[300px] border mt-6 bg-white rounded-lg'>
                        <img src={card4} alt="" className='w-[150px] h-[125px] ml-[56px] mt-[16px]' />
                        <div className='ml-[40px]'>
                            <span className='text-base font-bold ml-10 text-gray-500 '>Seçkin Firmalar</span>
                        </div>
                        <div className='mt-2'>
                            <span className="text-sm text-gray-600">
                                <span className='flex justify-center'>obilet olarak seçkin otobüs firmalarını</span>
                                <span className='flex justify-center'>sizler için bir araya getirdik. Firmaların</span>
                                <span className='flex justify-center'>otobüs biletlerini obilet'te</span>
                                <span className='flex justify-center'>karşılaştırabilir, uygun otobüs biletini </span>
                                <span className='flex justify-center'>bulabilir ve çevrimiçi bir şekilde satın</span>
                                <span className='flex justify-center'>alabilirsiniz.</span>
                            </span>
                        </div>
                    </div>


                </div>
            </div>
            <div className='flex justify-center items-center w-[1110px] h-[125px] ml-[390px]'>
            <img src={bankkart} alt="" className='w-full h-[140px] object-cover ' />
            </div>
        </>
    )
}

export default Cards