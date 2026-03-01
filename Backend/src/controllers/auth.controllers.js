import { registerUserService } from "../services/user.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req, res) => {
    const user = await registerUserService(req.body);
    return res.status(201).json(new ApiResponse(201, user, "User registered Successfully"))
})

export {registerUser};