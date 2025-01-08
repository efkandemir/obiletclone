import React, { useEffect, useState } from "react";

const OdemePassInfo = ({ seats, setPassengerData }) => {
  const result = typeof seats === "string" ? seats.split(",") : seats;

  const [passengerInfo, setPassengerInfo] = useState(
    result.map((seat) => ({ name: "", tcNo: "", isNotCitizen: false, seatNumber: seat }))
  );

  useEffect(() => {
    setPassengerData(passengerInfo);
  }, [passengerInfo, setPassengerData]);

  const handleNameChange = (index, value) => {
    const updatedInfo = [...passengerInfo];
    updatedInfo[index].name = value;
    setPassengerInfo(updatedInfo);
  };

  const handleTCChange = (index, value) => {
    const updatedInfo = [...passengerInfo];
    updatedInfo[index].tcNo = value;
    setPassengerInfo(updatedInfo);
  };

  const handleCitizenChange = (index, checked) => {
    const updatedInfo = [...passengerInfo];
    updatedInfo[index].isNotCitizen = checked;
    setPassengerInfo(updatedInfo);
  };

  return (
    <div className="w-[355px] border bg-white rounded-lg ml-2 mt-2 mb-20">
      <div className="h-[48px] mt-2 border-b border-black">
        <span className="ml-4 text-gray-600 text-lg font-semibold">Yolcu Bilgileri</span>
      </div>

      {result &&
        result.map((seat, index) => (
          <div key={index} className="flex flex-col ml-4 mt-4 pb-10">
            <div className="mt-2">
              <label className="text-gray-700 font-semibold">
                Adı Soyadı{" "}
                <span className="text-cyan-700">(Koltuk No : {seat})</span>
              </label>
              <input
                type="text"
                placeholder="Adı Soyadı"
                value={passengerInfo[index].name}
                onChange={(e) => handleNameChange(index, e.target.value)}
                className="border rounded-lg pl-2 border-black w-[300px] h-[35px] mt-1"
              />
            </div>
            <div className="mt-4">
              <label className="text-gray-700 font-semibold">T.C Kimlik No</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={passengerInfo[index].isNotCitizen}
                  onChange={(e) => handleCitizenChange(index, e.target.checked)}
                  className="ml-1"
                />
                <span className="text-sm ml-2">T.C vatandaşı değilim</span>
              </div>
              <input
                type="text"
                placeholder="T.C Kimlik No"
                value={passengerInfo[index].tcNo}
                onChange={(e) => handleTCChange(index, e.target.value)}
                className="border rounded-lg pl-2 border-black w-[300px] h-[35px] mt-1"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default OdemePassInfo;
