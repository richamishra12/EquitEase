const {model} =require("mongoose"); //model class comes from mongoose

const {PositionsSchema}=require("../schemas/PositionsSchema");
//creating model
const PositionsModel=new model("position",PositionsSchema);

module.exports={PositionsModel};