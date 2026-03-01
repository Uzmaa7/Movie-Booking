import express from "express";

import { registerUser, loginUser, resetPassword } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { registerValidator,loginValidator, resetPasswordValidator } from "../validators/auth.Validators.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const authRouter = express.Router();


authRouter.post("/register", registerValidator(), validate, registerUser);

authRouter.post("/login", loginValidator(), validate, loginUser);

authRouter.patch("/reset-password",verifyJWT, resetPasswordValidator(), validate, resetPassword);

export default authRouter;