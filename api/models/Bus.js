const mongoose = require("mongoose");

const busSchema = mongoose.Schema(
    {
        userId : {type:String , require:true},
        departure : {type:String , require:true},
        destination :{type:String , require:true},
        date : {type:String , require:true},
        accordionIndex : {type:String ,require:true},
        seats : {type:String , require:true},
        pricePerSeat :{type:String , require:true},
        departureTime : {type:String , require:true},
        email : {type:String , require:true},
        phone : {type:String, require:true},
        passenger: [
            {
              name: { type: String, required: true },
              tcNo: { type: String, required: true },
              isNotCitizen: { type: Boolean, required: true },
              seatNumber: { type: String, required: true },
            }
          ],
        cardNo : {type:String , require:true},
        cardDate : {type:String , require:true},
        cardCvc : {type:String , require:true},

    },
    {timestamps:true}
)
const Bus = mongoose.model("Bus" , busSchema);
module.exports = Bus;