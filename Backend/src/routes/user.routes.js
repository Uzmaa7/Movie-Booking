import express from "express";
import { updateUserRoleOrStatus } from "../controllers/user.controllers.js";

const userRouter = express.Router();

userRouter.patch("/:id", updateUserRoleOrStatus)

export default userRouter;