import express from "express";
import { updateUserRoleOrStatus } from "../controllers/user.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { updateUserRoleOrStatusValidator } from "../validators/user.Validators.js";

const userRouter = express.Router();

userRouter.patch("/:id",updateUserRoleOrStatusValidator(), validate, updateUserRoleOrStatus)

export default userRouter;