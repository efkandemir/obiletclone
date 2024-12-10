import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import PlanePages from "./pages/PlanePages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ucak-bileti" element={<PlanePages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
