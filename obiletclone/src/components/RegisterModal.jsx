import React, { useState } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom"; // navigate'ı import ettik
import { IoLogoFacebook } from "react-icons/io";
import { AiFillGoogleSquare } from "react-icons/ai";

const RegisterModal = ({
  isRegisterModalOpen,
  setIsRegisterModalOpen,
  setIsModalOpen, // LoginModal'ı açmak için gerekli setIsModalOpen
}) => {
  const navigate = useNavigate(); // navigate kullanarak yönlendirme yapacağız.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Only one password field

  const handleCancel = () => {
    setIsRegisterModalOpen(false); // Modalı kapatma işlemi
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password }), // Only one password
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await res.json();
      if (res.status === 201) {
        alert("Başarıyla kayıt oldunuz!");
        setIsRegisterModalOpen(false); // Kapatıyoruz
        setIsModalOpen(true);
      } else {
        alert(data.message || "Kayıt işlemi sırasında bir hata oluştu");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <Modal
      title="Üye Ol"
      open={isRegisterModalOpen}
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

        {/* Kayıt Formu */}
        <form onSubmit={onSubmit}>
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

          <div className="flex mb-4 flex-col">
            <div className="flex flex-row">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
              </label>
              <p>
                Kişisel verilerin işlenmesine ilişkin Aydınlatma Metni’ni
                okudum.
              </p>
            </div>
            <div className="flex flex-row mt-2">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
              </label>
              <p className="mt-2">
                Kampanya ve duyuruları ticari elektronik ileti olarak almayı ve
                kişisel verilerimin pazarlama amacıyla işlenmesini onaylıyorum.
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            Üye Ol
          </button>
        </form>

        {/* Üye Ol kısmı ve Login Modal açma */}
        <div className="text-center mt-4 text-sm">
          <button
            className="border-2 border-red-600 text-red-600 py-2 px-4 rounded hover:bg-red-600 hover:text-white"
            onClick={() => {
              setIsRegisterModalOpen(false); // Register modalını kapat
              setIsModalOpen(true); // Login modalını aç
            }}
          >
            Giriş Yap
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;
