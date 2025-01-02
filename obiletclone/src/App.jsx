import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import PlanePages from "./pages/PlanePages";
import HotelPage from "./pages/HotelPage";
import BusPage from "./pages/BusPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ucak-bileti" element={<PlanePages />} />
        <Route path="/otel" element={<HotelPage />} />
        <Route path="/bus-search" element={<BusPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
