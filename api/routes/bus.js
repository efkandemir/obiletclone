const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/bus-tickets", async (req, res) => {
  const { from, to } = req.query; 

  if (!from || !to) {
    return res.status(400).json({ error: "Lütfen 'from' ve 'to' parametrelerini sağlayın." });
  }

  try {
    const response = await axios.get(
      `https://api.collectapi.com/travel/busTicket?data.to=${to}&data.from=${from}`,
      {
        headers: {
          "content-type": "application/json",
          authorization: "apikey 3gPsHZmW1rYgsreXaYLCXu:7xdTE0r13eXaQFfKJzClj9", 
        },
      }
    );

    console.log("Response Data:", response.data);
    if (response.data.result.length === 0) {
      console.log("No data found for the provided parameters.");
    }
    res.json(response.data);
  } catch (error) {
    console.error("API Hatası:", error.response?.data || error.message);
    res.status(500).json({ error: "API isteği sırasında hata oluştu" });
  }
});

module.exports = router;
