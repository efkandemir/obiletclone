import React, { useState } from "react";
import OdemeHeader from "../OdemeComponents/OdemeHeader";
import OdemeTicketInfo from "../OdemeComponents/OdemeTicketInfo";
import OdemeContactInfo from "../OdemeComponents/OdemeContactInfo";
import OdemePassInfo from "../OdemeComponents/OdemePassInfo";
import OdemePaymentInfo from "../OdemeComponents/OdemePaymentInfo";
import { SiAdguard } from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";
import odeme2 from "../images/odeme2.png";
import { useLocation, useNavigate } from "react-router-dom";

const OdemePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const departure = searchParams.get("departure");
  const destination = searchParams.get("destination");
  const date = searchParams.get("date");
  const accordionIndex = searchParams.get("accordionIndex");
  const seats = searchParams.get("seats");
  const pricePerSeat = searchParams.get("pricePerSeat");
  const totalPrice = searchParams.get("totalPrice");
  const departureTime = searchParams.get("departureTime");

  const [emailData, setEmailData] = useState();
  const [telefonData, setTelefonData] = useState();
  const [passengerData, setPassengerData] = useState([]);
  const [cardNo, setCardNo] = useState();
  const [cardDate, setCardDate] = useState();
  const [cardCvc, setCardCvc] = useState();

  const navigate = useNavigate();
  const getInfoFromToken = (token) => {
    if (!token) {
      console.log("Token Bulunamadi!");
      return null;
    }
    try {
      const payload = atob(token.split(".")[1]);
      const decoded = JSON.parse(payload);
      const { userId } = decoded;
      return userId;
    } catch (error) {
      console.log("Token decoded Edilemedi!", error);
      return null;
    }
  };
  const token = localStorage.getItem("authToken");
  const userId = getInfoFromToken(token);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      userId,
      departure,
      destination,
      date,
      accordionIndex,
      seats,
      pricePerSeat,
      departureTime,
      email: emailData,
      phone: telefonData,
      passenger: passengerData.map((passenger, index) => ({
        ...passenger,
        seatNumber: seats.split(",")[index], // Burada seats'a göre koltuk numarasını alıyoruz
      })),
      cardNo,
      cardDate,
      cardCvc,
    };

    try {
      const response = await fetch("http://localhost:5000/api/bus/busTicket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        navigate("/");
      } else {
        throw new Error(result.message || "Bir hata oluştu");
      }
    } catch (error) {
      alert(error.message || "Bir hata oluştu");
    }
  };

  return (
    <>
      <OdemeHeader />
      <div className="bg-bgBus h-full">
        <div className="pt-10 flex flex-row">
          <OdemeTicketInfo
            accordionIndex={accordionIndex}
            departure={departure}
            destination={destination}
            seats={seats}
            date={date}
            departureTime={departureTime}
          />
          <div className="flex flex-col">
            <OdemeContactInfo
              setEmailData={setEmailData}
              setTelefonData={setTelefonData}
            />
            <OdemePassInfo seats={seats} setPassengerData={setPassengerData} />
          </div>
          <div className="flex flex-col">
            <OdemePaymentInfo
              setCardNo={setCardNo}
              setCardDate={setCardDate}
              setCardCvc={setCardCvc}
            />
            <div className="flex flex-row ml-3">
              <input type="checkbox" className="ml-4 mt-4 w-[15px] h-[15px]" />
              <div className="w-[270px] h-[80px] mt-2 ml-2">
                <span className="text-[12px] text-gray-600">
                  <span className="text-gray-900 underline cursor-pointer font-semibold">
                    Ön Bilgilendirme Formu'nu
                  </span>
                  ,
                  <span className="text-gray-900 underline cursor-pointer font-semibold">
                    Mesafeli Satış Sözleşmesi'ni
                  </span>{" "}
                  okudum ve onaylıyorum. Kişisel verilerin işlenmesine ilişkin
                  <span className="text-gray-900 underline cursor-pointer font-semibold">
                    Aydınlatma Metni’ni
                  </span>{" "}
                  ve{" "}
                  <span className="text-gray-900 underline cursor-pointer font-semibold">
                    Çerez Politikası Metni'ni
                  </span>{" "}
                  okudum.{" "}
                  <span className="text-gray-900 underline cursor-pointer font-semibold">
                    Kullanım Koşulları’nı
                  </span>{" "}
                  kabul ediyorum.
                </span>
              </div>
            </div>
            <div className="border mt-12 border-gray-300 w-[350px] ml-4"></div>
            <div className="mt-4 ml-10">
              <button
                onClick={handleSubmit}
                className="w-[300px] h-[55px] bg-odemeBtn rounded-lg"
              >
                <div className="flex flex-row">
                  <SiAdguard className="ml-4 mt-4 text-2xl text-white" />
                  <div className="flex flex-col ml-4">
                    <span className="w-[100px] text-lg ml-10 text-white font-semibold">
                      {totalPrice} TL
                    </span>
                    <span className="w-[170px] text-white ml-2 text-sm">
                      Güvenli Ödeme Yap
                    </span>
                  </div>
                  <div className="border-l-2 border-odemeBtn2 w-[68px] h-[53px] rounded-lg bg-odemeBtn2">
                    <div className="flex justify-center items-center">
                      <MdKeyboardArrowRight className="text-3xl mt-3 text-white" />
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="ml-4 mt-4">
              <img src={odeme2} className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OdemePage;
