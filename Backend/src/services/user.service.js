import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";


const registerUserService = async (data) => {
    const user = await User.create(data);
    if(!user){
        throw new ApiError(500, "Somethin went wrong while registering the user")
    }
    return user;
}

export {registerUserService};