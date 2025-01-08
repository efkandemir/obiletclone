import React, { useState, useEffect } from "react";
import image from "../images/tr.png";
import LoginModal from "./LoginModal";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verify, setVerify] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setVerify(true);
    }
  }, []);
  const items = [
    {
      key: "1",
      label: <Link to={"/uye/biletler"}>Seyahatlerim</Link>,
    },
    {
      key: "2",
      label: <Link to={"/uye/bilgi"}>Kullanıcı bilgilerim</Link>,
    },
    {
      key: "3",
      label: (
        <a rel="noopener noreferrer" onClick={() => {
          localStorage.removeItem("authToken"); // Tokeni temizler
          navigate("/"); // Çıkış sonrası login sayfasına yönlendirir
          setVerify(false);
        }}>
          Çıkış Yap
        </a>
      ),
    },
  ];
  return (
    <>
      <div className="h-[80px] overflow-x-hidden bg-kirmizi flex">
        <div className="pt-[16px]">
          <span className="ml-[375px] text-5xl text-white font-bold cursor-pointer" onClick={()=>{
            navigate("/")
          }}>
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

          {/* Conditional Rendering: Show either login or user name */}
          {verify ? (
            <Dropdown
              className="ml-[15px] mt-[5px] text-xl text-white cursor-pointer"
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Hoş Geldiniz
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          ) : (
            <span
              className="ml-[15px] mt-[5px] text-xl text-white cursor-pointer"
              onClick={() => setIsModalOpen(true)} // Trigger the login modal
            >
              Üye Girişi
            </span>
          )}
        </div>
      </div>

      {/* Show the Login Modal when `isModalOpen` is true */}
      <LoginModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setVerify={setVerify} // Pass setVerify to LoginModal
      />
    </>
  );
};

export default Header;
