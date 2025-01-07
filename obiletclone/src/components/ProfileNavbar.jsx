import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <div>
        <div className="ml-[375px] mt-10 w-[150px]">
          <span className="text-red-600 text-2xl font-semibold">Hesabım</span>
        </div>
        <div className="ml-[375px] mt-8 w-[150px] h-[550px] border border-gray-700">
          <button
            onClick={() => navigate("/uye/biletler")}
            className={`ml-4 mt-4 text-sm font-semibold hover:text-red-600 ${
              currentPath === "/uye/biletler" ? "text-red-600" : "text-black"
            }`}
          >
            Seyahatlerim
          </button>
          <div className="border w-[130px] mt-4 ml-2 border-gray-400"></div>
          <button
            onClick={() => navigate("/uye/bilgi")}
            className={`ml-4 mt-4 text-sm font-semibold hover:text-red-600 ${
              currentPath === "/uye/bilgi" ? "text-red-600" : "text-black"
            }`}
          >
            Kullanıcı Bilgilerim
          </button>
          <div className="border w-[130px] mt-4 ml-2 border-gray-400"></div>
          <button className="ml-4 mt-4 text-sm font-semibold hover:text-red-600 ">
            Çıkış Yap
          </button>
          <div className="border w-[130px] mt-4 ml-2 border-gray-400"></div>
        </div>
      </div>
    </>
  );
};

export default ProfileNavbar;
