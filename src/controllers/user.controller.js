import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"

const registerUser = asyncHandler (async (req,res)=>{
//get data form frontend
const {fullName, username, email, password} = req.body;

//validation 
if([
  fullName,username,email,password
].some((field)=>field?.trim() === "")){
  throw new ApiError("400","All fields are required!!")
}
})

export { registerUser }