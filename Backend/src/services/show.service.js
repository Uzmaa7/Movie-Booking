import Show from "../models/show.model.js";
import { ApiError } from "../utils/ApiError.js";
import Theatre from "../models/theatre.model.js";

const createShowService = async(data) => {
    const theatre = await Theatre.findById(data.theatreId);
    if(!theatre){
        throw new ApiError(404, "Theatre not found")
    }

    if(!theatre.movies.includes(data.movieId)){
        throw new ApiError(400, "movie is currently not available in the requested theatre")
    }

    try {
        const response = await Show.create(data);
        return response;
    } catch (error) {
        console.log("createShowService_error: ", error);
        throw new ApiError(500, "Error while creating show")
    }
}

export {createShowService}