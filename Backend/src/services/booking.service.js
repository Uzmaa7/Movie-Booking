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

const updateBookingService = async (data, bookingId) => {
    try {

        const response = await Booking.findByIdAndUpdate(
            bookingId,
            data,
            {new: true, runValidators: true}
        )

        if(!response){
            throw new ApiError(404, "No booking found for the given id")
        }

        return response;

    } catch (error) {
        console.log("updateBookingService error: ", error);
        throw new ApiError(422, "Error while updating booking")
    }
}

const getBookingsService = async(data) => {
    try {
        const response = await Booking.find(data);
        return response;

    } catch (error) {
        console.log("getBookingsService error: ", error);
        throw new ApiError(500, "Error while fetching user bookings");
    }
}
//only acces by admin
const getAllBookingsService = async() => {
    try {
        const response = await Booking.find();
        return response;
    } catch (error) {
        console.log("getAllBookingsService error: ", error);
        throw new ApiError(500, "Error while fetching all bookings");
    
    }
}

const getBookingByIdService = async(data) => {

    try {
        const response = await Booking.findOne({
            _id: data._id,
            userId: data.userId
        })
        if (!response) {
            throw new ApiError(404, "Booking not found or you don't have access");
        }
        return response
    } catch (error) {
        console.log("getBookingByIdService error: ", error);
        throw new ApiError(500, "Error while fetching a booking");
    
    }
}


export {createBookingService, updateBookingService, getBookingsService,  getAllBookingsService, getBookingByIdService};