import React, { useState, useEffect } from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { LuWallet } from "react-icons/lu";

const HotelSelect = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMessage, setCurrentMessage] = useState("");

  const messages = [
    "Güvenilir Seyahat Uygulaması",
    "Popüler Seyahat Uygulaması",
    "Bütçe Dostu Seyahat Uygulaması",
  ];
  const handleSearch = () => {
    console.log("Otel arama işlemi başlatıldı.");
  };  

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setCurrentMessage(messages[index]);
      setIsVisible(false);

      setTimeout(() => {
        setIsVisible(true);
        index = (index + 1) % messages.length;
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className="h-[147px] bg-kirmizi border-b-2 flex flex-col">
          <div className="text-white font-bold text-4xl flex ml-[372px] mt-[25px] w-full">
            <div className="flex h-16">
              <div>Türkiye'nin</div>
              <div
                className={`transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
                  }`}
              >
                <h3 className="flex ml-[10px]">
                  {currentMessage}
                  {currentMessage === "Güvenilir Seyahat Uygulaması" && (
                    <MdOutlineSecurity className="text-white text-2xl flex w-[45px] h-[45px] ml-[8px]" />
                  )}
                  {currentMessage === "Popüler Seyahat Uygulaması" && (
                    <AiOutlineLike className="text-white text-2xl flex w-[45px] h-[45px] ml-[8px] justify-center items-center" />
                  )}
                  {currentMessage === "Bütçe Dostu Seyahat Uygulaması" && (
                    <LuWallet className="text-white text-2xl flex w-[45px] h-[45px] ml-[8px]" />
                  )}
                </h3>
              </div>
            </div>


          </div>

          <div className="p-6 flex border w-[1148px] h-[120px] rounded-3xl mx-auto bg-white shadow-xl gap-4 items-center justify-between">
            {/* Nereye */}
            <div className="relative w-[447px] h-[72px] bg-gray-100 rounded-lg px-4 py-2">
              <label htmlFor="destination" className="text-sm text-gray-600">
                Nereye
              </label>
              <input
                id="destination"
                type="text"
                placeholder="Yalıhan Arı Hotel"
                className="bg-transparent focus:outline-none text-black font-bold text-lg w-full placeholder-gray-900 mt-1"
              />
            </div>

            {/* Giriş - Çıkış */}
            <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg w-[219px] h-[72px]">
              {/* Giriş Tarihi */}
              <div className="flex flex-col items-center w-[140px]">
                <span className="text-gray-500 text-sm">Giriş</span>
                <span className="text-black font-bold text-lg">19 Ara</span>
                <span className="text-gray-500 text-sm">Perşembe</span>
              </div>

              {/* Çıkış Tarihi */}
              <div className="flex items-center">
                <span className="text-gray-400 font-bold text-2xl">-</span>
              </div>

              <div className="flex flex-col items-center w-[140px]">
                <span className="text-gray-500 text-sm">Çıkış</span>
                <span className="text-black font-bold text-lg">20 Ara</span>
                <span className="text-gray-500 text-sm">Cuma</span>
              </div>
            </div>


            {/* Misafirler */}
            <div className="flex flex-col items-center bg-gray-100 rounded-lg px-4 py-2 w-[220px] h-[72px]">
              <span className="text-gray-500 text-sm">Misafir</span>
              <span className="text-black font-bold text-lg">
                2 Misafir 1 Oda
              </span>
            </div>

            {/* Otel Ara Butonu */}
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-yesil text-white font-bold rounded-full hover:bg-green-600 transition-colors w-[170px] h-[70px]"
            >
              Otobüs Ara
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelSelect;
