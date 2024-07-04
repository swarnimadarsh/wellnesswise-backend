const express=require("express");
const doctorSchema=require("../model/doctorSchema");
const doctorRoute=express.Router();
const mongoose = require("mongoose");

doctorRoute.post("/create-appoinment",(req,res)=>{
    doctorSchema.create(req.body,(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})


doctorRoute.get("/",(req,res)=>{
    doctorSchema.find((err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})


doctorRoute.route("/update/:id")
.get((req,res)=>{
    doctorSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
}).put((req,res)=>{
    doctorSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set:req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


doctorRoute.delete("/delete/:id",(req,res)=>{
    doctorSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err){
            return err;
        }
        else
        {
            res.json(data);
        }
    })
})


module.exports=doctorRoute;