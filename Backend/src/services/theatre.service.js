import Theatre from "../models/theatre.model.js";
import { ApiError } from "../utils/ApiError.js";

const createTheatreService = async(data) => {
   try {
     const response = await Theatre.create(data);
     return response;

   } catch (error) {
        throw new ApiError (500, "Error while creating theatre");
   }
}

const getATheatreService = async(id) => {
   const response = await Theatre.findById(id);

   if(!response){
    throw new ApiError(404, "Theatre not found with the given id")
   }

   return response;
}

const getAllTheatresService = async(data) => {
    let query = {};
    let pagination = {};

    if(data && data.city){
        //this checks whether city is present in query params or not
        query.city = data.city;
    }
    if(data && data.pincode){
        //this checks whether pincode is present in query params or not
        query.pincode = data.pincode;
    }
    if(data && data.name){
        //this checks whether name is present in query params or not
        query.name = data.name;
    }

    if(data && data.limit){
        pagination.limit = data.limit
    }

    if(data && data.skip){
        let perPage = (data.limit) ? data.limit : 5;
        pagination.skip = data.skip*perPage
    }
    // Find hamesha array dega, isliye yahan check lagane ki zaroorat nahi hai
    // Model.find(filter, {fields}, {limit:x, skip:y})
    const allTheatres = await Theatre.find(query, {}, pagination);

    return allTheatres;
}

const deleteTheatreService = async(id) => {
    const deletedDoc = await Theatre.findByIdAndDelete(id);

    if(!deletedDoc){
        throw new ApiError(404, "Theatre not found or already deleted")
    }
    return deletedDoc;
}

const updateATheatreService = async(id, data) => {
    const updatedDoc = await Theatre.findByIdAndUpdate(
        id,
        { $set: data }, // $set ensures only specific fields in 'data' are updated);
        {new : true}
    );

    if(!updatedDoc){
        throw new ApiError(404, "Theatre not found for updating")
    }

    return updatedDoc;

}
// Humne .toString() Kyun Kiya?
// Kyuki MongoDB me IDs ObjectId type me stored hoti hain,
// lekin API se jo movieIds aate hain wo usually string hote hain.

// Real Problem Kya Tha?

// Example:
// theatre.movies = [
//    ObjectId("65f123abc...")
// ]

// movieIds = [
//    "65f123abc..."
// ]
const updateMoviesInTheatresService = async(theatreId, movieIds, insert) => {
    const theatre = await Theatre.findById(theatreId);
    if(!theatre){
        throw new ApiError(404, "No such theatre found for the id provided")
    }
    if(insert){
        //we need to add movies
        movieIds.forEach((movieId) => {
            theatre.movies.push(movieId);
        })
    }
    else{
        // we need to remove movies
        let savedMovieIds = theatre.movies;
        movieIds.forEach((movieId) => {
            savedMovieIds = savedMovieIds.filter((smi) => smi.toString() !== movieId.toString())
        })
        theatre.movies = savedMovieIds;
    }
    await theatre.save();
    return theatre;
}

export {createTheatreService, getATheatreService, getAllTheatresService,
deleteTheatreService, updateATheatreService, updateMoviesInTheatresService};