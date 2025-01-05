import React from "react";
import Header from "../components/Header";
import BusSearch from "../components/BusSearch";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const BusPage = () => {
  return (
    <>
      <Header />
      <Navbar/>
      <div className="bg-bgBus h-full mb-8">
        <BusSearch />
      </div>
      <Footer />
    </>
  );
};

export default BusPage;
