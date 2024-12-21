import React, { useState } from "react";
import image from "../images/tr.png";
import LoginNotifications from "./LoginNotifications";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false); // State tanımlama


  return (
    <>
      <div className="h-[80px] overflow-x-hidden bg-kirmizi flex">
        <div className="pt-[16px]">
          <span className="ml-[375px] text-5xl text-white font-bold">
            obilet
          </span>
        </div>

        <div className="ml-[540px] mt-[20px] flex">
          <img
            src={image}
            className="border rounded-full mt-[7px] w-[25px] h-[25px] flex items-center justify-center"
            alt="language"
          />
          <span className="ml-[15px] h-[38px] border text-sm"></span>
          <span className="ml-[15px] mt-[5px] text-xl text-white">TRY</span>
          <span className="ml-[15px] h-[38px] border text-sm"></span>
          <span className="ml-[15px] mt-[5px] text-xl text-white">Yardım</span>
          <span className="ml-[15px] h-[38px] border text-sm"></span>
          <span className="ml-[15px] mt-[5px] text-xl text-white">
            Seyahat Sorgula
          </span>
          <span className="ml-[15px] h-[38px] border text-sm"></span>
          <span
            className="ml-[15px] mt-[5px] text-xl text-white cursor-pointer"
            onClick={() => setShowLogin(true)} // onClick ile state güncelleme
          >
            Üye Girişi
          </span>
        </div>
      </div>

      {/* LoginNotifications bileşenini göster */}
      {showLogin && <LoginNotifications onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Header;
