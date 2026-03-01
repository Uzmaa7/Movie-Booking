import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";


dotenv.config({
    path: "./.env"
})


export const verifyJWT = async (req, res, next) => {

    try {
        const token =  req.cookies?.accessToken || req.header
        ("Authorization")?.replace("Bearer ", "") ||  req.headers["x-access-token"];

    
        if(!token){
            return res.status(401).json({
                message: "Unauthorized request"
            })
        }
    
        //token is genuine or not?
        const decodedToken = jwt.verify(token, process.env.PRIVATE_KEY);
    
    
        const user = await User.findById(decodedToken?.id).select("-password -refreshToken");
        if(!user){
            return res.status(401).json({
                message: "Invalid Access Token"
            })
        }

        req.user = user;
        next();
            
    } catch (error) {
        console.log("verifyJWT error", error);
        return res.status(401).json({
            message: "Invalid access token"
        })
    }

    
}




export const isAdmin = asyncHandler(async (req, res, next) => {
    const user =  req.user;

    if (user.userRole !== "ADMIN") {
        throw new ApiError(403, "Access Denied: You do not have Admin privileges");
    }

    next();
});

