const {Schema} =require("mongoose");  //schema class comes from mongoose
const OrdersSchema=new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode:String,  //buy or sell

});
module.exports={OrdersSchema}