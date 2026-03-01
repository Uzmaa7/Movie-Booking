import { registerUserService, loginUserService } from "../services/user.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req, res) => {
    const user = await registerUserService(req.body);
    return res.status(201).json(new ApiResponse(201, user, "User registered Successfully"))
})

const loginUser = asyncHandler(async(req, res) => {

    const {email, password} = req.body;
    const data = await loginUserService(email, password);

    return res.status(200).json(new ApiResponse(200 , data , "User logged in "))
})

export {registerUser, loginUser};