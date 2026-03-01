import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})


const registerUserService = async (data) => {
    const user = await User.create(data);
    if(!user){
        throw new ApiError(500, "Somethin went wrong while registering the user")
    }
    await user.save();
    return user;
}

const loginUserService = async (email, password) => {
    const user = await User.findOne({email});
    if(!user){
        throw new ApiError(401, "Invalid credentials");
    }

    const isPasswordCorrect = await user.isPasswordMatched(password);
    if(!isPasswordCorrect){
        throw new ApiError(401, "Invalid credentials");
    }

    const token = jwt.sign(
        {id: user.id, email: user.email},
         process.env.PRIVATE_KEY,
         {expiresIn : process.env.TOKEN_EXPIRY}
        )

    const data = {
        email : user.email,
        role: user.userRole,
        status: user.userStatus,
        token: token
    }

    return data;
}

const resetPasswordService = async(oldPassword, newPassword, userId) => {
    
    if(oldPassword === newPassword){
        throw new ApiError(400, "new password must be different from old password")
    }

   const user = await User.findById(userId);
   if(!user){
         throw new ApiError(404, "User not found");
   }

   const isPasswordCorrect = await user.isPasswordMatched(oldPassword);
   if(!isPasswordCorrect){
    throw new ApiError(401, "old password is incorrect");
   }

   user.password = newPassword;
   await user.save();

   return user
}

const updateUserRoleOrStatusService = async (data, userId) => {
    let updateQuery = data.userRole
    ? {userRole : data.userRole}
    : {userStatus : data.userStatus}

    let response = await User.findOneAndUpdate(
        {_id : userId},
        updateQuery,
        {new: true}
    )

    if(!response){
        throw new ApiError(404, "No user found for the given id")
    }

    return response;
}

export {registerUserService, loginUserService, resetPasswordService,
    updateUserRoleOrStatusService
};