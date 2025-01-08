const Bus = require("../models/Bus");
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config();

router.post("/busTicket" , async(req,res)=>{
    try {
        const {
            userId,
            departure, 
            destination,
            date,
            accordionIndex,
            seats,
            pricePerSeat,
            departureTime,
            email,
            phone,
            passenger,
            cardNo,
            cardDate,
            cardCvc
        } = req.body;
        const newBusTicket = new Bus({
            userId,
            departure, 
            destination,
            date,
            accordionIndex,
            seats,
            pricePerSeat,
            departureTime,
            email,
            phone,
            passenger,
            cardNo,
            cardDate,
            cardCvc
        });
        await newBusTicket.save();

        res.status(201).json("Başarılı!");
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/busTicket/:userId", async (req, res) => {
    try {
      const userId = req.params.userId; 
      const tickets = await Bus.find({ userId }); 
  
      if (!tickets || tickets.length === 0) {
        return res.status(404).json("Veri Bulunamadı!"); 
      }
  
      res.status(200).json(tickets); 
    } catch (error) {
      res.status(500).json(error); 
    }
  });
module.exports = router;