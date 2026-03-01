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

export {registerUserService, loginUserService};