// require('dotenv').config({path:'./env'});
import { app } from "./app.js";
import connectDB from "./db/index.js"
import dotenv from "dotenv";


dotenv.config({
  path:'./env'
})


connectDB()
.then(()=>{
 app.listen(process.env.PORT || 8000, ()=>{
    console.log(`DataBase connect on port : ${process.env.PORT}`)
  })
})
.catch((err)=>{
  console.log("DataBase Connection error", err)
})