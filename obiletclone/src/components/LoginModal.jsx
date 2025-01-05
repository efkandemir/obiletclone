import React, { useState } from "react";
import { Modal } from "antd";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillGoogleSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom"; // useNavigate ekledik
import RegisterModal from "./RegisterModal"; // RegisterModal'ı import ettik

const LoginModal = ({ isModalOpen, setIsModalOpen ,setVerify  }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // RegisterModal için ayrı bir state

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleRegister = () => {
    setIsRegisterModalOpen(true);
    setIsModalOpen(false);
  };

 
  const onFinish = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      const data = await res.json();

      if (res.status === 200 || res.status === 201) {
        const token = data.token;
        localStorage.setItem("authToken", token);
        setVerify(true); // Successfully logged in, update verify to true
        navigate("/"); // Başarılı giriş sonrası yönlendirme
        setIsModalOpen(false);
      } else {
        alert("Kullanıcı adı veya şifre hatalı!");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Modal
        title="Üye Girişi"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="flex justify-center items-center"
      >
        <div className="flex flex-col gap-3 p-4">
          {/* Sosyal Medya ile Giriş */}
          <button className="bg-blue-600 text-white py-2 rounded flex items-center gap-2">
            <IoLogoFacebook className="text-xl" />
            <span>Facebook ile Giriş Yap</span>
          </button>
          <button className="bg-red-600 text-white py-2 rounded flex items-center gap-2">
            <AiFillGoogleSquare className="text-xl" />
            <span>Google ile Giriş Yap</span>
          </button>

          {/* Veya Bölümü */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-400" />
            <span className="mx-3 text-gray-500">Veya</span>
            <hr className="flex-grow border-gray-400" />
          </div>

          {/* Login Formu */}
          <form onSubmit={onFinish}>
            <input
              type="email"
              placeholder="E-posta Adresi"
              className="w-full p-2 mb-3 border rounded focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Şifre"
              className="w-full p-2 mb-3 border rounded focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> Beni Hatırla
              </label>
              <a href="#" className="text-sm text-gray-700">
                Şifrenizi mi Unuttunuz?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
            >
              Giriş Yap
            </button>
          </form>

          {/* Üye Ol */}
          <div className="text-center mt-4 text-sm flex flex-col">
            Henüz üye değil misiniz?{" "}
            <button
              className="border-2 border-red-600 text-red-600 py-2 px-4 rounded hover:bg-red-600 hover:text-white"
              onClick={handleRegister} // RegisterModal'ı açıyoruz
            >
              Üye Ol
            </button>
          </div>
        </div>
      </Modal>

      {/* RegisterModal'ın Render Edilmesi */}
      {isRegisterModalOpen && (
        <RegisterModal
          isRegisterModalOpen={isRegisterModalOpen}
          setIsRegisterModalOpen={setIsRegisterModalOpen}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default LoginModal;
