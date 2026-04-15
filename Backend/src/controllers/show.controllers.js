import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { createShowService, getShowsService } from "../services/show.service.js";

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

const getShows = asyncHandler(async(req, res) => {
    const response = await getShowsService(req.query);
    return res.status(200).json(
        new ApiResponse(
            200,
            response,
            "Successfully fetched shows"
        )
    )

})

export {createShow, getShows};