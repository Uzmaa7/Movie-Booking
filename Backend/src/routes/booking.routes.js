import express from "express";
import { validate } from "../middlewares/validator.middleware.js";
import {verifyJWT } from "../middlewares/auth.middleware.js";
import { createBooking } from "../controllers/booking.controllers.js";
import { createBookingValidator } from "../validators/booking.Validators.js";


const bookingRouter = express.Router();

bookingRouter.post("/", verifyJWT, createBookingValidator(), validate, createBooking);

export default bookingRouter;