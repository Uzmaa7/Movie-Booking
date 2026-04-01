import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { createShowService } from "../services/show.service.js";

const createShow = asyncHandler(async(req, res) => {

    const data = req.body;

    const response = await createShowService(data);
    
    return res.status(201).json(
       new ApiResponse(
            201,
            response,
            "Successfully created show"
        )
    )
})

export {createShow};