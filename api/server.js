const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const authRoutes = require("./routes/auth.js");
app.use("/api/auth" , authRoutes);

const busRoutes = require("./routes/bus.js");
app.use("/api/bus" , busRoutes);

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB!");
    } catch (error) {
        console.log(error);
    }
}


app.get("/" ,(req,res)=>{
    res.send("Hello World => Author:Efkan Demir!");
})

app.listen(PORT ,()=>{
    connect();
    console.log(`Server ${PORT} 'unda çalıştı!`);
})