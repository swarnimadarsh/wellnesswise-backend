const express=require("express");
const loginSchema=require("../model/loginSchema");
const loginRoute=express.Router();

loginRoute.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await loginSchema.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})

loginRoute.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await loginSchema.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await loginSchema.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})




module.exports=loginRoute;