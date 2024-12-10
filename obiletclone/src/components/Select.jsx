import React, { useState, useEffect } from "react";
import { MdOutlineSecurity } from "react-icons/md";

export const Select = () => {
    // Header için durum ve efekt
    const [currentMessage, setCurrentMessage] = useState(
        "Popüler Seyahat Uygulaması"
    ); // Başlangıç mesajı
    const [isVisible, setIsVisible] = useState(true); // Görünürlük kontrolü

    const messages = [
        "Popüler Seyahat Uygulaması",
        "Güvenilir Seyahat Uygulaması",
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
    const [date, setDate] = useState("");
    const [todayOrTomorrow, setTodayOrTomorrow] = useState("today");

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
                            <div>Türkiye'nin </div>
                            <div
                                className={`transition-opacity duration-1000 ease-in-out ml-4 ${isVisible ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <h3 className="flex items-center">
                                    <MdOutlineSecurity
                                        className={`mr-3 text-white text-2xl ${currentMessage === "Güvenilir Seyahat Uygulaması" ? "opacity-100" : "opacity-0"}`}
                                    />{currentMessage}</h3>

                            </div>
                        </div>
                    </div>

                    <div className=" p-8 text-center flex border w-[1148px] h-[120px] rounded-3xl mx-auto mt-[2px] bg-beyaz shadow-xl gap-8 items-center justify-center ml-[375px] ">
                        {/* Nereden */}
                        <div class="flex items-center relative w-[320px] h-[72px] bg-gray-100 rounded-lg justify-center ">

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
                                class="absolute top-6 left-4 bg-transparent focus:outline-none text-black font-bold text-lg w-full"
                                onChange={(e) => handleKerem(e.target.value)}
                            />
                            <span class="absolute bottom-2 left-4 text-sm text-gray-500">
                                Ordu
                            </span>
                        </div>


                        {/* Nereye */}
                        <div class="relative w-[320px] h-[72px] bg-gray-100 rounded-lg">

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
                                class="absolute top-6 left-4 bg-transparent focus:outline-none text-black font-bold text-lg w-full"
                            />
                        </div>

                        {/* Gidiş Tarihi */}
                        <div className="flex flex-col">
                            <label className="block font-bold mb-2">Gidiş Tarihi</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="p-4 w-[120px] h-[66px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-cercevegri"
                            />
                        </div>

                        {/* Bugün/Yarın */}
                        <div className="flex flex-col">
                            <label className="block font-bold mb-2">Tarih</label>
                            <div className="flex flex-row gap-4 mt-2">
                                <label className="flex items-center gap-2 ">
                                    <input
                                        type="radio"
                                        value="today"
                                        checked={todayOrTomorrow === "today"}
                                        onChange={(e) => setTodayOrTomorrow(e.target.value)}
                                        className="focus:ring-blue-500"
                                    />
                                    Bugün
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="tomorrow"
                                        checked={todayOrTomorrow === "tomorrow"}
                                        onChange={(e) => setTodayOrTomorrow(e.target.value)}
                                        className="focus:ring-blue-500"
                                    />
                                    Yarın
                                </label>
                            </div>
                        </div>

                        {/* Otobüs Ara Butonu */}
                        <button
                            onClick={handleSearch}
                            className="px-6 py-3 bg-yesil text-white font-bold rounded-full hover:bg-green-600 transition-colors w-[170px]"
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
