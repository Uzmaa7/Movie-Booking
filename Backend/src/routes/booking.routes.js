import express from "express";
import { validate } from "../middlewares/validator.middleware.js";
import {canChangeStatusOfBooking, verifyJWT } from "../middlewares/auth.middleware.js";
import { createBooking, updateBooking } from "../controllers/booking.controllers.js";
import { createBookingValidator } from "../validators/booking.Validators.js";


const bookingRouter = express.Router();

bookingRouter.post("/", verifyJWT, createBookingValidator(), validate, createBooking);

//admins and clients both can change the booking status
bookingRouter.patch("/:id", verifyJWT, canChangeStatusOfBooking, updateBooking);

export default bookingRouter;