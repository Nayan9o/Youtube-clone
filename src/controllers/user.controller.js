import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  //get data form frontend
  const { fullName, username, email, password } = req.body;

  //validation
  if (
    [fullName, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError("400", "All fields are required!!");
  }

  //if alredy exist
  const userExist = User.findOne({
    $or : [{ email }, { username }]
  })

  if(userExist){
    throw new ApiError(409,"User with this email or username alredy exist")
  }
});

export { registerUser };
