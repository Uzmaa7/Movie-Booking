import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";


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

    const data = {
        email : user.email,
        role: user.userRole,
        status: user.userStatus,
        token: ""
    }

    return data;
}

export {registerUserService, loginUserService};