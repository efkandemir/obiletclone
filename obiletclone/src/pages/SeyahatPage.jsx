import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProfileNavbar from "../components/ProfileNavbar";
import kopya from "../images/kopya.png";
import kopya2 from "../images/kopya2.png";
import kopya3 from "../images/kopya3.png";
import kopya4 from "../images/kopya4.png";

const SeyahatPage = () => {
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
  const [fetchingData, setFetchingData] = useState();
  const fetchData = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/bus/busTicket/${userId}`
      );
      if (!response.ok) {
        console.log("Veri Bulunamadı!");
        return;
      }
      const data = await response.json();
      setFetchingData(data);
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  const getImageByAccordionIndex = (index) => {
    switch (index) {
      case "1":
        return kopya;
      case "2":
        return kopya2;
      case "3":
        return kopya3;
      case "4":
        return kopya4;
      default:
        return kopya; // Varsayılan görsel
    }
  };

  useEffect(() => {
    if (userId) {
      fetchData(userId);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="flex ml-[-160px]">
        <ProfileNavbar />
        <div className="flex-1 flex flex-col items-center mt-[104px]">
          {fetchingData?.map((ticket, ticketIndex) => (
            <div
              key={ticketIndex}
              className="w-[930px] h-auto border border-gray-700 mb-8"
            >
              <div className="flex flex-row">
                <img
                  src={getImageByAccordionIndex(ticket.accordionIndex)}
                  alt="Seyahat"
                  className="w-[100px] h-[40px] ml-4 mt-4 object-cover"
                />
                <div className="flex flex-col">
                  <span className="ml-[295px] mt-4 text-gray-700">
                    {ticket.date} - {ticket.departureTime}
                  </span>
                  <span className="ml-[300px] text-gray-700">
                    {ticket.departure} -- {ticket.destination}
                  </span>
                </div>
              </div>

              {ticket?.passenger?.map((passenger, passengerIndex) => (
                <div
                  key={passenger._id}
                  className="w-full flex flex-row mt-4 justify-between pr-4 pl-4 border-t-2 pt-4"
                >
                  <div className="flex flex-col">
                    <span className="text-xl text-gray-700 font-semibold">
                      {passengerIndex + 1}. {passenger.name}
                    </span>
                    <span className="text-green-600 hover:underline cursor-pointer select-none">
                      Yolcularıma Kaydet
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text- text-gray-700 font-semibold">PNR NO</span>
                    <span>152895</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl text-gray-700 font-semibold">
                      Koltuk No
                    </span>
                    <span>{passenger.seatNumber}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl text-gray-700 font-semibold">Tutar</span>
                    <span>{parseFloat(ticket.pricePerSeat)} TL</span>
                  </div>
                </div>
              ))}

              <div className="mt-4">
                <p className="font-bold ml-4">
                  Toplam Tutar:{" "}
                  {ticket?.passenger?.length * parseFloat(ticket.pricePerSeat)} TL
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SeyahatPage;
