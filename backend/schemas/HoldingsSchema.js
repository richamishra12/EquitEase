const {Schema} =require("mongoose");  //schema class comes from mongoose
const HoldingsSchema=new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,

});
module.exports={HoldingsSchema}