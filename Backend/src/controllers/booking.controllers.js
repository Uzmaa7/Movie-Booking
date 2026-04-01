import { createBookingService, getAllBookingsService, getBookingsService, updateBookingService, getBookingByIdService } from "../services/booking.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createBooking = asyncHandler(async(req, res) => {

    let userId = req.user._id;

    const data = req.body;

    const response = await createBookingService({...data, userId});

    return res.status(201).json(
        new ApiResponse(
            201,
            response,
            "Successfully created booking"
        )
    )
})

const updateBooking = asyncHandler(async(req, res) => {
    
    const data = req.body;
    const {id} = req.params;

    const response = await updateBookingService(data, id);
    return res.status(200).json(
        new ApiResponse(
            200,
            response,
            "Successfully updated booking"
        )
    )
})

const getBookings = asyncHandler(async(req, res) => {
   
    const response = await getBookingsService({userId: req.user._id});

    return res.status(200).json(
        new ApiResponse(
            200,
            response,
            response.length === 0 ? "No bookings found for this user" : "Successfully fetched bookings"
        )
    )
})

const getAllBookings = asyncHandler(async(req, res) => {
    const response = await getAllBookingsService();
    return res.status(200).json(
        new ApiResponse(
            200,
            response,
            response.length === 0 ? "No bookings found" : "Successfully fetched all the bookings"
        )
    )
})

const getBookingById = asyncHandler(async(req, res) => {
    const {id} = req.params;
    const response = await getBookingByIdService({userId: req.user._id, _id : id});

    return res.status(200).json(
        new ApiResponse(
            200,
            response,
            "Successfully fetched a booking"
        )
    )
})

export {createBooking, updateBooking, getBookings,  getAllBookings, getBookingById };