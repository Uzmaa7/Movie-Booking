import express from "express";
import { updateUserRoleOrStatus } from "../controllers/user.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { updateUserRoleOrStatusValidator } from "../validators/user.Validators.js";
import { isAdmin, verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.patch("/:id", verifyJWT, isAdmin, updateUserRoleOrStatusValidator(), validate, updateUserRoleOrStatus)

export default userRouter;