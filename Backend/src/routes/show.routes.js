import express from "express";
import { validate } from "../middlewares/validator.middleware.js";
import { createShow, getShows } from "../controllers/show.controllers.js";
import { isAdminOrClient, verifyJWT } from "../middlewares/auth.middleware.js";
import { createShowValidator } from "../validators/show.Validators.js";

const showRouter = express.Router();

showRouter.post("/", verifyJWT, isAdminOrClient, createShowValidator(), validate, createShow);

//get all the shows of a movie running in a theatre
showRouter.get("/", getShows);

export default showRouter;