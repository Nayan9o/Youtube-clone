import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

async function connectDB() {
  try{
   const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`DB connected successfuly ${connectionInstance.Connection.host}`);
    
  }catch(error){
    console.log("MONGOdb connect failed ",error);
    process.exit(1)
    
  }
  
}

export default connectDB