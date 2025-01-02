import React, { useState } from "react";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";

const BusSelect = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [todayOrTomorrow, setTodayOrTomorrow] = useState("today");
  const [selectedDate, setSelectedDate] = useState(null); // Tarihi tutacak state

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString); // Seçilen tarihi state'e kaydet
    console.log("Seçilen Tarih:", dateString);
  };
  const navigate = useNavigate();
  const handleSearch = () => {
    console.log({
      departure,
      destination,
      date: todayOrTomorrow === "today" ? "Bugün" : "Yarın",
      selectedDate: selectedDate || "Tarih seçilmedi",
    });
   navigate("/bus-search")
  };

  return (
    <div className="p-8 text-center flex border w-[1148px] h-[120px] rounded-3xl mx-auto mt-[2px] bg-beyaz shadow-xl gap-8 items-center justify-center ml-[375px]">
      {/* Nereden */}
      <div className="flex items-center relative w-[360px] h-[72px] bg-cercevegri rounded-lg justify-center ml-[40px]]">
        <label
          htmlFor="location"
          className="absolute top-2 left-4 text-sm text-gray-600"
        >
          Nereden
        </label>
        <input
          id="location"
          type="text"
          placeholder="Ünye"
          className="absolute top-6 left-4 bg-cercevegri focus:outline-none text-black font-bold text-lg w-full placeholder-gray-900"
          onChange={(e) => setDeparture(e.target.value)}
        />
        <span className="absolute bottom-2 left-4 text-sm text-gray-500">
          Ordu
        </span>
      </div>

      {/* Nereye */}
      <div className="relative w-[360px] h-[72px] bg-gray-100 rounded-lg">
        <label
          htmlFor="destination"
          className="absolute top-2 left-4 text-sm text-gray-600"
        >
          Nereye
        </label>
        <input
          id="destination"
          type="text"
          placeholder="Erzincan"
          className="absolute top-6 left-4 bg-transparent focus:outline-none text-black font-bold text-lg w-full placeholder-gray-900"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      {/* Gidiş Tarihi */}
      <div className="flex flex-col items-center justify-center bg-gray-100 p-2 rounded-lg w-[140px] h-[66px] relative">
        <span className="text-gray-500 text-sm">Gidiş Tarihi</span>
        <DatePicker 
          onChange={handleDateChange} 
          placeholder="Tarih seç" 
          className="w-full " 
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
  );
};

export default BusSelect;
