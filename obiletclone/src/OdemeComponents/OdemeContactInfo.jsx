import React, { useEffect, useState } from "react";

const OdemeContactInfo = ({ setEmailData, setTelefonData }) => {
  const [email, setEmail] = useState();
  const [telefon, setTelefon] = useState();
  useEffect(() => {
    setEmailData(email);
    setTelefonData(telefon);
  }, [email, telefon]);

  return (
    <>
      <div className="w-[355px] h-[240px] border bg-white ml-2 rounded-lg">
        <div className="h-[48px] mt-2 border-b border-black">
          <span className="ml-4 text-gray-600 text-lg  font-semibold">
            İletişim Bilgileri
          </span>
        </div>
        <div className="flex flex-col ml-4 mt-4">
          <span className="text-gray-700  font-semibold">E-Mail</span>
          <input
            type="text"
            className="border rounded-lg border-black w-[300px] h-[35px] mt-1 pl-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col ml-4 mt-4">
          <span className="text-gray-700 font-semibold">Cep Telefonu</span>
          <div className="flex flex-row">
            <input
              type="text"
              className="border rounded-lg pl-2 border-black w-[80px] h-[35px] mt-1"
              placeholder="TR(+90)"
            />
            <input
              type="text"
              className="border rounded-lg ml-2 pl-2 border-black w-[212px] h-[35px] mt-1"
              onChange={(e) => setTelefon(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OdemeContactInfo;
