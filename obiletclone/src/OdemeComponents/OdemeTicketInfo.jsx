import React from "react";
import kopya from "../images/kopya.png";
import kopya2 from "../images/kopya2.png";
import kopya3 from "../images/kopya3.png";
import kopya4 from "../images/kopya4.png";

const OdemeTicketInfo = ({
  accordionIndex,
  departure,
  destination,
  seats,
  date,
  departureTime,
}) => {
  const data = {
    1: { image: kopya, title: "Ali Osman Ulusoy" },
    2: { image: kopya2, title: "Kamil Koç" },
    3: { image: kopya3, title: "Pamukkale" },
    4: { image: kopya4, title: "Metro" },
  };
  const selectedData = data[accordionIndex] || {
    image: kopya,
    title: "Bilinmeyen Firma",
  };
  return (
    <>
      <div className="h-[320px] w-[331px] border ml-[375px] bg-white rounded-lg">
        <div className="h-[48px] mt-2 border-b border-black flex flex-row">
          <img
            src={selectedData.image}
            className="w-[100px] h-[40px] ml-4 object-cover"
          />
          <span className="text-sm ml-6 mt-2 text-gray-700 font-sans">
            {selectedData.title} <span>Turizm</span>
          </span>
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <div className="flex flex-col ">
            <span className="text-gray-600 text-base font-bold ml-4">
              Kalkış
            </span>
            <span className="ml-4 text-sm text-gray-800">
              {departure} Otogarı
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 text-base font-bold ml-[70px]">
              Varış
            </span>
            <span className="ml-[70px] text-sm text-gray-800">
              {destination} Otogarı
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <div className="flex flex-col ">
            <span className="text-gray-600 text-sm font-bold ml-4">
              Hareket Zamanı
            </span>
            <span className="ml-4 text-sm text-gray-800">
              {date} , {departureTime}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 text-sm font-bold ml-[65px]">
              Koltuk
            </span>
            <span className="ml-16 text-sm text-gray-800">{seats}</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <div className="flex flex-col ">
            <span className="text-gray-600 text-sm font-bold ml-4">Peron</span>
            <span className="ml-4 text-sm text-gray-800">38</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <div className="flex flex-col ">
            <span className="text-gray-600 text-sm font-bold ml-4">
              Bilet İşlemleri
            </span>
            <span className="ml-4 mt-1 text-xs text-gray-800">
              Seferin 1 saat öncesine kadar biletinizi açığa alabilir,
              değiştirebilir ya da iptal edebilirsiniz.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OdemeTicketInfo;
