const mongoose = require("mongoose") 
const vehicleSchema = mongoose.Schema({ 
 model: String, 
 mileage: Number, 
 numWheels: Number 
}) 
 
module.exports = mongoose.model("Vehicle", 
vehicleSchema) 