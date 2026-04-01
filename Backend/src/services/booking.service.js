import Movie from "../models/movie.model.js";
import Theatre from "../models/theatre.model.js";
import { ApiError } from "../utils/ApiError.js";
import Booking from "../models/booking.model.js";

const createBookingService = async (data) => {

    const theatre = await Theatre.findById(data.theatreId);
    if(!theatre){
        throw new ApiError(404, "No theatre found for the given theatreId")
    }

    // check if movie is available in that theatre or not
    if(!theatre.movies.includes(data.movieId)){
        throw new ApiError(400, "Given movie is not available in the requested theatre")
    }
    
    try {

        const response = await Booking.create(data);
        if(!response){
            throw new ApiError(500, "Something went wrong while creating the booking")
        }
        return response;

    } catch (error) {
        console.log("createBookingService_error: ", error);
        throw new ApiError(500, "Error while creating booking")
    }
}

export {createBookingService };