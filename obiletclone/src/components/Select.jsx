import React, { useState, useEffect } from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { LuWallet } from "react-icons/lu";

export const Select = () => {
    // Header için durum ve efekt
    const [currentMessage, setCurrentMessage] = useState(
        "Popüler Seyahat Uygulaması"
    ); // Başlangıç mesajı
    const [isVisible, setIsVisible] = useState(true); // Görünürlük kontrolü

    const messages = [
        "Popüler Seyahat Uygulaması",
        "Güvenilir Seyahat Uygulaması",
        "Bütçe Dostu Seyahat Uygulaması",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false); // Yazıyı kaybetmek için opacity'yi sıfırlıyoruz

            // 1 saniye sonra yeni mesajı göster
            setTimeout(() => {
                setCurrentMessage((prevMessage) => {
                    const currentIndex = messages.indexOf(prevMessage);
                    const nextIndex = (currentIndex + 1) % messages.length;
                    return messages[nextIndex];
                });
                setIsVisible(true); // Yeni yazıyı göstermek için opacity'yi geri açıyoruz
            }, 1000); // 1 saniye bekle
        }, 2000); // 3 saniyede bir kaydırma

        return () => clearInterval(interval); // Temizleme işlemi
    }, [messages]);

    // Arama formu için durumlar
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");
    const [todayOrTomorrow, setTodayOrTomorrow] = useState("today");
    const [date, setDate] = React.useState(new Date().toISOString().split("T")[0]);


    const handleSearch = () => {
        console.log({
            departure,
            destination,
            date: todayOrTomorrow === "today" ? "Bugün" : "Yarın",
        });
        alert("Otobüs arama işlemi yapıldı!");
    };

    const [location, setLocation] = useState();
    const handleKerem = (values) => {
        setLocation(values);
    }


    return (
        <>

            <div>
                <div className="h-[147px] bg-kirmizi border-b-2 flex flex-col ">
                    <div className="text-white font-bold text-4xl flex ml-[372px] mt-[25px] w-full ">
                        <div className="flex h-16">
                            <div>Türkiye'nin</div>
                            <div
                                className={`transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <h3 className="flex  ml-[10px]">
                                    {currentMessage}
                                    {currentMessage === "Güvenilir Seyahat Uygulaması" && (
                                        <MdOutlineSecurity className="text-white text-2xl flex w-[45px] h-[45px]  ml-[8px]" />
                                    )}
                                    {currentMessage === "Popüler Seyahat Uygulaması" && (
                                        <AiOutlineLike className="text-white text-2xl flex w-[45px] h-[45px] ml-[8px] justify-center items-center" />
                                    )}
                                    {currentMessage === "Bütçe Dostu Seyahat Uygulaması" && (
                                        <LuWallet className="text-white text-2xl flex w-[45px] h-[45px] ml-[8px]" />
                                    )}
                                </h3>
                            </div>
                        </div>
                    </div>


                    <div className=" p-8 text-center flex border w-[1148px] h-[120px] rounded-3xl mx-auto mt-[2px] bg-beyaz shadow-xl gap-8 items-center justify-center ml-[375px] ">
                        {/* Nereden */}
                        <div class="flex items-center relative w-[360px] h-[72px] bg-cercevegri rounded-lg justify-center ml-[40px]] ">

                            <label
                                for="location"
                                className="absolute top-2 left-4 text-sm text-gray-600"
                            >
                                Nereden
                            </label>
                            <input
                                id="location"
                                type="text"
                                placeholder="Ünye"
                                class="absolute top-6 left-4 bg-cercevegri focus:outline-none text-black font-bold text-lg w-full placeholder-gray-900"
                                onChange={(e) => handleKerem(e.target.value)}
                            />
                            <span class="absolute bottom-2 left-4 text-sm text-gray-500">
                                Ordu
                            </span>
                        </div>


                        {/* Nereye */}
                        <div class="relative w-[360px] h-[72px] bg-gray-100 rounded-lg">

                            <label
                                for="location"
                                class="absolute top-2 left-4 text-sm text-gray-600"
                            >
                                Nereye
                            </label>
                            <input
                                id="location"
                                type="text"
                                placeholder="Erzincan"
                                class="absolute top-6 left-4 bg-transparent focus:outline-none text-black font-bold text-lg w-full  placeholder-gray-900"
                            />
                        </div>

                        {/* Gidiş Tarihi */}
                        <div className="flex flex-col items-center justify-center bg-gray-100 p-2 rounded-lg w-[140px] h-[66px] relative">
                            <span className="text-gray-500 text-sm">Gidiş Tarihi</span>
                            <span className="text-black font-bold text-lg">
                                {new Date(date).toLocaleDateString('tr-TR', { day: '2-digit', month: 'short' })}
                            </span>
                            <span className="text-gray-500 text-sm">
                                {new Date(date).toLocaleDateString('tr-TR', { weekday: 'long' })}
                            </span>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            />
                        </div>



                        {/* Bugün/Yarın */}
                        <div className="flex flex-col">
                            <div className="flex flex-col gap- mt-2">
                                <label className="flex items-center gap-2 ">
                                    <input
                                        type="radio"
                                        value="today"
                                        checked={todayOrTomorrow === "today"}
                                        onChange={(e) => setTodayOrTomorrow(e.target.value)}
                                    />
                                    Bugün
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="tomorrow"
                                        checked={todayOrTomorrow === "tomorrow"}
                                        onChange={(e) => setTodayOrTomorrow(e.target.value)}

                                    />
                                    Yarın
                                </label>
                            </div>
                        </div>

                        {/* Otobüs Ara Butonu */}
                        <button
                            onClick={handleSearch}
                            className="px-6 py-3 bg-yesil text-white font-bold rounded-full hover:bg-green-600 transition-colors w-[200px] h-[75px]"
                        >
                            Otobüs Ara
                        </button>
                    </div>
                </div>


            </div>

        </>
    );
};

export default Select;
