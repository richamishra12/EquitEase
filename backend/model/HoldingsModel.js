const {model} =require("mongoose"); //model class comes from mongoose

const {HoldingsSchema}=require("../schemas/HoldingsSchema");
//creating model
const HoldingsModel=new model("holding",HoldingsSchema);

module.exports={HoldingsModel};