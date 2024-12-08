import React from "react";
import image from "../images/tr.png";
const Header = () => {
  return (
    <>
      <div className="h-[80px] bg-kirmizi flex">
        <div className="pt-[16px]">
          <span className="ml-[375px] text-5xl text-white font-bold">
            obilet
          </span>
        </div>

        <div className="ml-[560px] mt-[20px] flex">
          <img
            src={image}
            className="border rounded-full mt-[7px] w-[25px] h-[25px] flex items-center justify-center"
          ></img>
          <span className="ml-[15px] h-[38px] border text-sm"></span>
          <span className="ml-[15px] mt-[5px] text-xl text-white">TRY</span>
          <span className="ml-[15px] h-[38px] border text-sm"></span>
          <span className="ml-[15px] mt-[5px] text-xl text-white">Yardım</span>
          <span className="ml-[15px] h-[38px] border text-sm"></span>
          <span className="ml-[15px] mt-[5px] text-xl text-white">
            Seyahat Sorgula
          </span>
          <span className="ml-[15px] h-[38px] border text-sm"></span>
          <span className="ml-[15px] mt-[5px] text-xl text-white">
            Üye Girişi
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
