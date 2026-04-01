import { createBookingService } from "../services/booking.service.js";
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

export {createBooking };