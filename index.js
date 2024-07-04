const mongoose=require("mongoose");
const express=require("express");


const loginRoute = require("./controller/loginRoute");
const doctorRoute=require("./controller/doctorRoute");

const cors= require("cors");
const bodyParser= require("body-parser");

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://test:1234@cluster0.wss6dje.mongodb.net/mydb");

var db=mongoose.connection;
db.on("open",()=> console.log("connected to database"));
db.on("error",()=> console.log("error"));

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.use("/loginRoute",loginRoute);
app.use("/doctorRoute",doctorRoute)


app.listen(4000, ()=>{
    console.log("server started at 4000");
})