import React, { useState } from "react";
import { BsBusFrontFill } from "react-icons/bs";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdHotel } from "react-icons/md";
import { FaCarRear } from "react-icons/fa6";
import { IoMdBoat } from "react-icons/io";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("Otobüs");
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="h-[72px] border-b-2 bg-beyaz flex">
        <div
          className={`ml-[375px] mt-[12px] w-[130px] h-[45px] border  rounded-3xl ${
            activeButton === "Otobüs"
              ? "bg-kirmizi "
              : "bg-beyaz border-bordergri"
          }`}
          onClick={() => handleClick("Otobüs")}
        >
          <button className="flex ml-[22px]">
            <BsBusFrontFill
              className={` mt-[12px] text-lg ${
                activeButton === "Otobüs" ? "text-white" : "text-kirmizi"
              }`}
            />
            <span
              className={`ml-[5px] mt-[10px]  font-bold ${
                activeButton === "Otobüs" ? "text-white" : "text-gri"
              }`}
            >
              Otobüs
            </span>
          </button>
        </div>

        <div
          className={`ml-[20px] mt-[12px] w-[110px] h-[45px] border bg-beyaz rounded-3xl border-bordergri hover:border-kirmizi ${
            activeButton === "Uçak"
              ? "bg-kirmizi"
              : "bg-beyaz border-border-gri"
          }`}
          onClick={() => handleClick("Uçak")}
        >
          <button className="flex ml-[22px]">
            <GiCommercialAirplane
              className={`text-kirmizi mt-[12px] text-lg w-[19px] h-[19px] ${
                activeButton === "Uçak" ? "text-white" : "text-kirmizi"
              } `}
            />
            <span
              className={`ml-[5px] mt-[7px] text-gri  font-semibold text-xl w-12  ${
                activeButton === "Uçak" ? "text-white" : "text-gri"
              }`}
            >
              Uçak
            </span>
          </button>
        </div>

        <div
          className={`ml-[20px] mt-[12px] w-[110px] h-[45px] border bg-beyaz rounded-3xl border-bordergri hover:border-kirmizi ${
            activeButton === "Otel"
              ? "bg-kirmizi"
              : "bg-beyaz border-border-gri"
          }`}
          onClick={() => handleClick("Otel")}
        >
          <button className="flex ml-[22px]">
            <MdHotel
              className={`text-kirmizi mt-[12px] text-lg bg  w-[19px] h-[19px] ${
                activeButton === "Otel" ? "text-white" : "text-kirmizi"
              } `}
            />
            <span
              className={`ml-[5px] mt-[7px] text-gri  font-semibold text-xl w-12  ${
                activeButton === "Otel" ? "text-white" : "text-gri"
              }`}
            >
              Otel
            </span>
          </button>
        </div>

        <div
          className={`ml-[20px] mt-[12px] w-[110px] h-[45px] border bg-beyaz rounded-3xl border-bordergri hover:border-kirmizi ${
            activeButton === "Araç"
              ? "bg-kirmizi"
              : "bg-beyaz border-border-gri"
          }`}
          onClick={() => handleClick("Araç")}
        >
          <button className="flex ml-[22px]">
            <FaCarRear
              className={`text-kirmizi mt-[12px] text-lg bg  w-[19px] h-[19px] ${
                activeButton === "Araç" ? "text-white" : "text-kirmizi"
              } `}
            />
            <span
              className={`ml-[5px] mt-[7px] text-gri  font-semibold text-xl w-12  ${
                activeButton === "Araç" ? "text-white" : "text-gri"
              }`}
            >
              Araç
            </span>
          </button>
        </div>

        <div
          className={`ml-[20px] mt-[12px] w-[140px] h-[45px] border bg-beyaz rounded-3xl border-bordergri hover:border-kirmizi ${
            activeButton === "Feribot"
              ? "bg-kirmizi"
              : "bg-beyaz border-border-gri"
          }`}
          onClick={() => handleClick("Feribot")}
        >
          <button className="flex ml-[22px]">
            <IoMdBoat
              className={`text-kirmizi mt-[12px] text-lg bg  w-[19px] h-[19px] ${
                activeButton === "Feribot" ? "text-white" : "text-kirmizi"
              }`}
            />
            <span
              className={`ml-[5px] mt-[7px] text-gri  font-semibold text-xl w-12  ${
                activeButton === "Feribot" ? "text-white" : "text-gri"
              }`}
            >
              Feribot
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
