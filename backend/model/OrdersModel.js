const {model} =require("mongoose"); //model class comes from mongoose

const {OrdersSchema}=require("../schemas/OrdersSchema");
//creating model
const OrdersModel=new model("order",OrdersSchema);

module.exports={OrdersModel};