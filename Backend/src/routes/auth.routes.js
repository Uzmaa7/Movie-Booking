import express from "express";

import { registerUser, loginUser } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { registerValidator,loginValidator } from "../validators/auth.Validators.js";


const authRouter = express.Router();

authRouter.post("/register", registerValidator(), validate, registerUser);

authRouter.post("/login", loginValidator(), validate, loginUser);

export default authRouter;