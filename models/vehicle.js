const mongoose = require("mongoose") 

const vehicleSchema = mongoose.Schema({ 
 model: String, 
 mileage: Number, 
 numWheels: {
    type: Number,
    min: 0,
    max: 10}
 }) 
 
module.exports = mongoose.model("Vehicle", 
vehicleSchema) 