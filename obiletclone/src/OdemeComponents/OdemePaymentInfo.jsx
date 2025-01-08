import React, { useEffect, useState } from "react";
import odeme from "../images/odeme.png";
const OdemePaymentInfo = ({ setCardNo, setCardDate, setCardCvc }) => {
  const [no, setNo] = useState();
  const [date, setDate] = useState();
  const [cvc, setCvc] = useState();
  useEffect(() => {
    setCardNo(no);
    setCardDate(date);
    setCardCvc(cvc);
  }, [no, date, cvc]);

  return (
    <>
      <div className="bg-white w-[355px] h-[497px] border rounded-lg ml-2">
        <div className="h-[48px] mt-2 border-b border-black">
          <span className="ml-4 text-gray-600 text-lg font-semibold">
            Ödeme Bilgileri
          </span>
        </div>
        <div className="flex justify-center items-center mt-4 select-none">
          <span className="text-base text-red-600 border-b-2 border-red-600 font-semibold">
            Banka / Kredi Kartı
          </span>
        </div>
        <div className="mt-4">
          <img src={odeme} className="object-cover" />
        </div>
        <div className="flex flex-col ml-4 mt-4 border-t-2 pt-2">
          <span className="text-gray-700  font-semibold">Kart Numarası</span>
          <input
            type="text"
            className="border rounded-lg pl-2 border-black w-[300px] h-[35px] mt-1"
            placeholder="•••• •••• •••• ••••"
            maxLength={16}
            onChange={(e) => setNo(e.target.value)}
          />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col ml-4 mt-4 pt-2">
            <span className="text-gray-700  font-semibold">
              Son Kullanma Tarihi
            </span>
            <input
              type="text"
              className="border rounded-lg pl-2 border-black w-[150px] h-[35px] mt-1"
              placeholder="AA / YY"
              maxLength={5}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col ml-4 mt-4 pt-2">
            <span className="text-gray-700  font-semibold">CVC2</span>
            <input
              type="text"
              className="border rounded-lg pl-2 border-black w-[130px] h-[35px] mt-1"
              placeholder="•••"
              maxLength={3}
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        </div>
        <div className="border-t-2 mt-8 pt-4 flex flex-col">
          <div className="flex flex-row">
            <span className="text-base font-semibold text-gray-600 ml-4">
              Taksit Seçimi
            </span>
            <span className="text-sm underline cursor-pointer text-gray-600 ml-8 mt-1">
              Kartlara göre taksit seçenekleri
            </span>
          </div>
          <span className="text-xs text-gray-400 ml-4 mt-4">
            Taksit seçenekleri kart bilgilerinin ilk 8 hanesi girildikten sonra
            gösterilecektir.
          </span>
        </div>
      </div>
    </>
  );
};

export default OdemePaymentInfo;
