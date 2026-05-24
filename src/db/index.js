import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

async function connectDB() {
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log("DB connected successfuly");
    
  }catch(error){
    console.log("ERROR ",error);
    process.exit(1)
    
  }
  
}

export default connectDB