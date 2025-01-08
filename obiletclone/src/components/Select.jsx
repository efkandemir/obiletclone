import React, { useState, useEffect } from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { LuWallet } from "react-icons/lu";
import BusSelect from "./BusSelect";

export const Select = () => {
  const [currentMessage, setCurrentMessage] = useState(
    "Popüler Seyahat Uygulaması"
  ); // Başlangıç mesajı
  const [isVisible, setIsVisible] = useState(true); // Görünürlük kontrolü

  const messages = [
    "Popüler Seyahat Uygulaması",
    "Güvenilir Seyahat Uygulaması",
    "Bütçe Dostu Seyahat Uygulaması",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Yazıyı kaybetmek için opacity'yi sıfırlıyoruz

      setTimeout(() => {
        setCurrentMessage((prevMessage) => {
          const currentIndex = messages.indexOf(prevMessage);
          const nextIndex = (currentIndex + 1) % messages.length;
          return messages[nextIndex];
        });
        setIsVisible(true); // Yeni yazıyı göstermek için opacity'yi geri açıyoruz
      }, 1000); // 1 saniye bekle
    }, 2000); // 3 saniyede bir kaydırma

    return () => clearInterval(interval); // Temizleme işlemi
  }, [messages]);

  return (
    <>
      <div>
        <div className="h-[147px] bg-kirmizi border-b-2 flex flex-col ">
          <div className="text-white font-bold text-4xl flex ml-[372px] mt-[25px] w-full ">
            <div className="flex h-16">
              <div>Türkiye'nin</div>
              <div
                className={`transition-opacity duration-1000 ease-in-out ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="flex  ml-[10px]">
                  {currentMessage}
                  {currentMessage === "Güvenilir Seyahat Uygulaması" && (
                    <MdOutlineSecurity className="text-white text-2xl flex w-[45px] h-[45px]  ml-[8px]" />
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

          <BusSelect />
        </div>
      </div>
    </>
  );
};

export default Select;
