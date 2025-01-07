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
      return decoded.userId;
    } catch (error) {
      console.log("Token decoded Edilemedi!", error);
      return null;
    }
  };

  const token = localStorage.getItem("authToken");
  const userId = getInfoFromToken(token);
  const [fetchingData, setFetchingData] = useState(null);

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
      console.error("Veri çekme hatası:", error);
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
      <div className="flex flex-row">
        <ProfileNavbar />
        {fetchingData ? (
          <div className="w-full ml-8 mt-8">
            <div className="flex flex-row items-center mb-4">
              <img
                src={getImageByAccordionIndex(fetchingData.accordionIndex)}
                alt="Seyahat"
                className="w-[80px] h-[40px] object-cover"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">
                  {fetchingData.departure} → {fetchingData.destination}
                </h2>
                <p className="text-sm text-gray-500">
                  {fetchingData.date} - {fetchingData.departureTime}
                </p>
              </div>
            </div>

            <div className="border p-4 bg-white rounded-lg shadow">
              <h3 className="text-md font-semibold mb-4">Yolcu Listesi</h3>
              <div className="space-y-4">
                {fetchingData.passenger.map((passenger, index) => (
                  <div
                    key={passenger._id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="text-md font-medium">
                        {index + 1}. {passenger.name}
                      </p>
                      <p className="text-sm text-gray-600">TC: {passenger.tcNo}</p>
                      <p className="text-sm text-gray-600">
                        Vatandaş: {passenger.isNotCitizen ? "Hayır" : "Evet"}
                      </p>
                    </div>
                    <div>
                      <p className="text-md">Koltuk No: {passenger.seatNumber}</p>
                      <p className="text-md">
                        Ücret: {parseFloat(fetchingData.pricePerSeat)} TL
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end">
                  <p className="font-bold">
                    Toplam Tutar:{" "}
                    {fetchingData.passenger.length *
                      parseFloat(fetchingData.pricePerSeat)}{" "}
                    TL
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <span>Veri Bulunamadı</span>
        )}
      </div>
    </>
  );
};

export default SeyahatPage;
