const mongoose=require ("mongoose");

const doctorSchema=new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "appoinmentdate":{type:String},
    "appoinmenttime":{type:String},
},{
    collection:"doctor"
});

module.exports=mongoose.model("doctorSchema",doctorSchema);