import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CiClock2 } from "react-icons/ci";
import { LuArmchair } from "react-icons/lu";
import { PiSteeringWheel } from "react-icons/pi";
import kopya from "../images/kopya.png";
import kopya2 from "../images/kopya2.png";
import kopya3 from "../images/kopya3.png";
import kopya4 from "../images/kopya4.png";
import ali from "../images/ali.png";
import { Modal } from "antd";

const BusSearch = () => {
  const [selectedSeats, setSelectedSeats] = useState([[], [], [], []]); // Her accordion için ayrı koltuk seçimi
  const [prices, setPrices] = useState([]);
  const [times, setTimes] = useState([]); // New state for storing random times
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const showModal = (image) => {
    if (event) event.preventDefault(); // Sayfanın başa dönmesini engelle
    setActiveImage(image);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const randomPrices = Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * (1500 - 500 + 1)) + 500
    );
    setPrices(randomPrices);

    // Generate random times for each accordion
    const randomTimes = Array.from({ length: 4 }, () => {
      const hour = Math.floor(Math.random() * (24 - 6 + 1)) + 6; // Random hour between 6 and 24
      const minute = Math.floor(Math.random() * 60); // Random minute between 0 and 59
      return `${hour}:${minute < 10 ? "0" : ""}${minute}`; // Format the time
    });
    setTimes(randomTimes);
  }, []);

  const handleSeatClick = (accordionIndex, seatNumber) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.map((seats, index) =>
        index === accordionIndex
          ? seats.includes(seatNumber)
            ? seats.filter((seat) => seat !== seatNumber)
            : seats.length >= 4
            ? seats
            : [...seats, seatNumber]
          : seats
      )
    );
  };

  const seatNumbers = [
    { id: 3, col: 2, row: 1 },
    { id: 2, col: 2, row: 2 },
    { id: 1, col: 2, row: 4 },
    { id: 6, col: 3, row: 1 },
    { id: 5, col: 3, row: 2 },
    { id: 4, col: 3, row: 4 },
    { id: 9, col: 4, row: 1 },
    { id: 8, col: 4, row: 2 },
    { id: 7, col: 4, row: 4 },
    { id: 12, col: 5, row: 1 },
    { id: 11, col: 5, row: 2 },
    { id: 10, col: 5, row: 4 },
    { id: 15, col: 6, row: 1 },
    { id: 14, col: 6, row: 2 },
    { id: 13, col: 6, row: 4 },
    { id: 18, col: 7, row: 1 },
    { id: 17, col: 7, row: 2 },
    { id: 16, col: 7, row: 4 },
    { id: 21, col: 8, row: 1 },
    { id: 20, col: 8, row: 2 },
    { id: 19, col: 8, row: 4 },
    { id: 22, col: 9, row: 4 },
    { id: 25, col: 10, row: 1 },
    { id: 24, col: 10, row: 2 },
    { id: 23, col: 10, row: 4 },
    { id: 28, col: 11, row: 1 },
    { id: 27, col: 11, row: 2 },
    { id: 26, col: 11, row: 4 },
    { id: 31, col: 12, row: 1 },
    { id: 30, col: 12, row: 2 },
    { id: 29, col: 12, row: 4 },
    { id: 34, col: 13, row: 1 },
    { id: 33, col: 13, row: 2 },
    { id: 32, col: 13, row: 4 },
  ];

  const images = [kopya, kopya2, kopya3, kopya4];

  return (
    <div className="w-[1150px]  ml-[375px] pt-20 pb-20 mb-8">
      {[...Array(4)].map((_, index) => (
        <Accordion key={index} className="mb-16">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className="h-[93px] rounded-2xl"
          >
            <Typography component="div">
              <div className="flex">
                <div>
                  <img
                    src={images[index]}
                    alt={`Accordion ${index + 1}`}
                    className="w-[140px] h-[50px] object-cover"
                  />
                </div>
                <div className="flex flex-row">
                  <CiClock2 className="ml-[120px] mt-1 text-xl" />
                  <span className="ml-2 text-xl">{times[index]}</span>{" "}
                  {/* Display random time */}
                </div>

                <div className="ml-[250px]">
                  <div className="flex flex-row items-center">
                    <LuArmchair className="text-xl" />
                    <span className="ml-2 text-xl">2+1</span>
                  </div>
                  <div className="text-sm mt-1 text-center">
                    <span>İzmir </span>
                    <span>►</span>
                    <span> Ankara</span>
                  </div>
                </div>

                <span className="ml-[250px] text-xl font-bold">
                  {prices[index]} TL
                </span>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-cardbggri h-[500px] border-t-2">
            <Typography>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <button
                    onClick={() => showModal(images[index])}
                    className="w-[150px] h-[40px] border bg-white mt-6 ml-6 border-black rounded-lg"
                  >
                    Sefer Detayları
                  </button>
                  <div className="w-[750px] h-[220px] border ml-6 mt-6 rounded-l-2xl bg-bgBuss rounded-r-md relative">
                    <div className="grid grid-cols-13 grid-rows-5 gap-3 ml-2 mt-6 mr-8">
                      <div className="col-start-1 mt-16 row-span-5 flex items-center justify-center">
                        <PiSteeringWheel className="text-5xl text-gray-400 transform -rotate-90" />
                      </div>

                      {seatNumbers.map(({ id, col, row }) => (
                        <div
                          key={id}
                          onClick={() => handleSeatClick(index, id)}
                          className={`col-start-${col} row-start-${row} border w-[35px] h-[35px] flex justify-center items-center cursor-pointer rounded-lg ${
                            selectedSeats[index].includes(id)
                              ? "bg-green-500 text-white"
                              : "bg-white"
                          }`}
                        >
                          {id}
                        </div>
                      ))}
                    </div>
                    <div className="ml-[600px]">
                      <div className="flex flex-row">
                        <div className="w-[35px] h-[35px] border bg-white rounded-lg"></div>
                        <span className="mt-2 ml-2">Boş Koltuk</span>
                      </div>
                      <div className="flex flex-row">
                        <div className="w-[35px] h-[35px] border bg-green-500 mt-6 rounded-lg"></div>
                        <span className="mt-8 ml-2">Dolu Koltuk</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[480px] border ml-4"></div>
                <div className="w-[300px] h-[480px] border-2 ml-4 p-4">
                  {selectedSeats[index].length > 0 ? (
                    <div>
                      <div className="font-bold">Seçtiğiniz Koltuklar:</div>
                      <div className="flex flex-row">
                        {selectedSeats[index].map((seat) => (
                          <div
                            key={seat}
                            className="border rounded-lg flex w-[35px] h-[35px] bg-green-500 justify-center items-center mx-1 mt-2"
                          >
                            {seat}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 font-bold">
                        <div className="flex flex-col">
                          <span className="mt-2">Toplam Fiyat</span>
                          <span className="mt-4">
                            {prices[index] * selectedSeats[index].length} TL
                          </span>
                        </div>
                      </div>

                      <div className="mt-[250px] ml-2">
                        <button className="border bg-green-600 w-[250px] h-[40px] rounded-xl text-white">
                          ONAYLA VE DEVAM ET
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      Lütfen Soldan Koltuk Seçin
                    </div>
                  )}
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Modal
        title="Sefer Detayları"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="flex justify-center items-center mt-20"
        width={480}
        height={390}
        footer={false}
      >
        <img
          src={ali}
          className="object-cover w-[450px]  rounded-lg"
          alt="Sefer Detayı"
        />
      </Modal>
    </div>
  );
};

export default BusSearch;
