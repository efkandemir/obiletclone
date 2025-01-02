import React, { useState } from "react";
import axios from "axios";

const BusSearch = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);

  const normalize = (input) =>
    input
      .trim()
      .toLowerCase()
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ç/g, "c")
      .replace(/ğ/g, "g")
      .replace(/ö/g, "o")
      .replace(/ü/g, "u");

  const handleSearch = async () => {
    const normalizedDeparture = normalize(departure);
    const normalizedDestination = normalize(destination);

    try {
      setError(null); // Hata sıfırlanır
      const response = await axios.get(
        `https://api.collectapi.com/travel/busTicket?data.to=${normalizedDestination}&data.from=${normalizedDeparture}`,
        {
          headers: {
            "content-type": "application/json",
            Authorization:
              "apikey 3gPsHZmW1rYgsreXaYLCXu:7xdTE0r13eXaQFfKJzClj9",
          },
        }
      );

      if (response.data.success && response.data.result.length > 0) {
        setFlights(response.data.result);
      } else {
        setFlights([]);
        setError("Sonuç bulunamadı.");
      }
    } catch (err) {
      setFlights([]);
      setError("Hata oluştu: " + err.message);
    }
  };

  return (
    <div>
      <h1>Otobüs Bileti Arama</h1>
      <div>
        <label>
          Nereden:
          <input
            type="text"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            placeholder="Kalkış yeri"
          />
        </label>
      </div>
      <div>
        <label>
          Nereye:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Varış yeri"
          />
        </label>
      </div>
      <button onClick={handleSearch}>Ara</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {flights.length > 0 ? (
        <ul>
          {flights.map((flight, index) => (
            <li key={index}>
              <p>
                <strong>Firma:</strong> {flight.name}
              </p>
              <p>
                <strong>Kalkış:</strong> {flight.starttime}
              </p>
              <p>
                <strong>Varış:</strong> {flight.endtime}
              </p>
              <p>
                <strong>Fiyat:</strong> {flight.price}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        !error && <p>Yükleniyor...</p>
      )}
    </div>
  );
};

export default BusSearch;
