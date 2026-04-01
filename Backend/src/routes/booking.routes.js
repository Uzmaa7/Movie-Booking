import express from "express";
import { validate } from "../middlewares/validator.middleware.js";
import {canChangeStatusOfBooking, isAdmin, verifyJWT } from "../middlewares/auth.middleware.js";
import { createBooking, updateBooking, getBookings, getAllBookings, getBookingById } from "../controllers/booking.controllers.js";
import { createBookingValidator } from "../validators/booking.Validators.js";


const bookingRouter = express.Router();

bookingRouter.post("/", verifyJWT, createBookingValidator(), validate, createBooking);

//admins and clients both can change the booking status
bookingRouter.patch("/:id", verifyJWT, canChangeStatusOfBooking, updateBooking);

bookingRouter.get("/", verifyJWT, getBookings);

bookingRouter.get("/all", verifyJWT, isAdmin, getAllBookings);

bookingRouter.get("/:id", verifyJWT, getBookingById);

export default bookingRouter;