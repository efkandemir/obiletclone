import React, { useState } from "react";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillGoogleSquare } from "react-icons/ai";
import Register from "./Register";

const LoginNotifications = ({ onClose }) => {
    const [showRegister, setShowRegister] = useState(false);

    const handleRegisterClick = () => {
        setShowRegister(true); // Register modalını aç
    };
    const handleCloseRegister = () => {
        setShowRegister(false); // Register modalını kapatır
        onClose(); // LoginNotifications modalını da kapatır
    };


    return (
        <>
            {!showRegister && (
                <>
                    {/* Arka Plan Katmanı */}
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"></div>

                    {/* Modal */}
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                        <div className="bg-white shadow-lg rounded-lg w-full max-w-md relative">
                            {/* Kapatma Butonu */}
                            <div className="flex justify-end p-3">
                                <button
                                    onClick={onClose}
                                    className="text-gray-500 hover:text-gray-800"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Başlık */}
                            <h2 className="text-center text-xl font-normal text-gray-700 mb-4">
                                Üye Girişi
                            </h2>

                            <div className="flex flex-col gap-3 px-6">
                                <button className="bg-lacivert text-white py-2 rounded flex items-center pl-4 gap-x-2">
                                    <span className="flex-shrink-0"><IoLogoFacebook /></span>
                                    <span className=" ml-[85px]">Facebook ile Giriş Yap</span>
                                </button>
                                <button className="bg-mavi text-white py-2 rounded flex items-center pl-4 gap-x-2">
                                    <span className="flex-shrink-0 font-semibold"><AiFillGoogleSquare /></span>
                                    <span className="ml-[86px] font-semibold">Google ile Giriş Yap</span>
                                </button>
                            </div>

                            {/* Veya Bölümü */}
                            <div className="flex items-center my-4 px-6">
                                <hr className="flex-grow border-gray-400 border-t-2" />
                                <span className="mx-3 text-gray-500">Veya</span>
                                <hr className="flex-grow border-gray-400 border-t-2 " />
                            </div>

                            {/* Giriş Formu */}
                            <form className="px-6">
                                <input
                                    type="email"
                                    placeholder="E-posta Adresi"
                                    className="w-full h-[33px] mb-3 p-2 border rounded focus:outline-none"
                                />
                                <input
                                    type="password"
                                    placeholder="Şifre"
                                    className="w-full h-[33px] mb-3 p-2 border rounded focus:outline-none"
                                />
                                <div className="flex justify-between items-center mb-4">
                                    <label className="flex items-center text-sm">
                                        <input type="checkbox" className="mr-2" /> Beni Hatırla
                                    </label>
                                    <a href="#" className="text-gray-700 text-sm">
                                        Şifrenizi mi Unuttunuz?
                                    </a>
                                </div>
                                <button className="ml-2 w-[381px] h-[45px] bg-cercevekirmizi text-white py-2 rounded hover:bg-red-600">
                                    Giriş Yap
                                </button>
                            </form>

                            {/* Üye Ol */}
                            <div className="text-center my-4 text-black font-semibold text-sm">
                                Henüz üye değil misiniz?
                                <button
                                    className="w-[334px] h-[44px] border-2 border-cercevekirmizi bg-beyaz text-kirmizi rounded text-lg"
                                    onClick={handleRegisterClick}
                                >
                                    Üye Ol
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {/* Register Bileşeni */}
            {showRegister && <Register onClose={handleCloseRegister} />}
        </>
    );
};

export default LoginNotifications;
