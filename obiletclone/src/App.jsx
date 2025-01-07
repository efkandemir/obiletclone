import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlanePages from "./pages/PlanePages";
import HotelPage from "./pages/HotelPage";
import BusPage from "./pages/BusPage";
import OdemePage from "./pages/OdemePage";
import SeyahatPage from "./pages/SeyahatPage";
import UyeBilgiPage from "./pages/UyeBilgiPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ucak-bileti" element={<PlanePages />} />
        <Route path="/otel" element={<HotelPage />} />
        <Route path="/bus-search" element={<BusPage />} />
        <Route path="/odeme" element={<OdemePage />} />
        <Route path="/uye/biletler" element={<SeyahatPage />} />
        <Route path="/uye/bilgi" element={<UyeBilgiPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
