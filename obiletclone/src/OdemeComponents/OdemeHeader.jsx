import React from "react";
import image from "../images/tr.png";
const OdemeHeader = () => {
  return (
    <>
      <div className="h-[80px] overflow-x-hidden  bg-white flex">
        <div className="pt-[16px]">
          <span className="ml-[375px] text-5xl text-red-500 font-bold">
            obilet
          </span>
        </div>

        <div className="ml-[840px] mt-[20px] flex">
          <img
            src={image}
            className="border rounded-full mt-[7px] w-[25px] h-[25px] flex items-center justify-center"
            alt="language"
          />
          <span className="ml-[15px] h-[38px] border text-sm border-red-500"></span>
          <span className="ml-[15px] mt-[5px] text-xl text-gray-600 ">TRY</span>
          <span className="ml-[15px] h-[38px] border text-sm border-red-500"></span>
          <span className="ml-[15px] mt-[5px] text-xl text-gray-600">
            Yardım
          </span>
        </div>
      </div>
    </>
  );
};

export default OdemeHeader;
