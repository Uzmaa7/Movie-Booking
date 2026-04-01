import { createBookingService, updateBookingService } from "../services/booking.service.js";
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

export {createBooking, updateBooking };