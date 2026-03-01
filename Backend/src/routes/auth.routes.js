import express from "express";

import { registerUser } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { registerValidator } from "../validators/auth.Validators.js";


const authRouter = express.Router();

authRouter.post("/register", registerValidator(), validate, registerUser);

export default authRouter;