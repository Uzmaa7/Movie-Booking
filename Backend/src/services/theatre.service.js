import Movie from "../models/movie.model.js";
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

    //list all the theatres in which a particlar movie is running
    if(data && data.movieId){
        query.movies = data.movieId; 
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

// check if movie A is running in Theatre B
const checkMovieService = async(theatreId, movieId) => {
    const isPresent = await Theatre.exists({
        _id : theatreId,
        movies: movieId
    })

    if(!isPresent){
        throw new ApiError(404, "This movie is not running in the specified theatre")
    }

    return true;
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
    const existingTheatre = await Theatre.findById(theatreId);
    if(!existingTheatre){
        throw new ApiError(404, "No such theatre found for the id provided")
    }

    const updateQuery = insert 
    ?  {$addToSet: {movies : {$each: movieIds}}}
    :  {$pull: {movies: {$in: movieIds}}}


    const updatedTheatre = await Theatre.findByIdAndUpdate(theatreId, updateQuery, {new: true})

    if (!updatedTheatre) {
        throw new ApiError(404, "Theatre not found with the given ID");
    }

    return updatedTheatre;

    // if(insert){
    //     //we need to add movies
    //     //this code is adding multiple entries for a movies

    //     // movieIds.forEach((movieId) => {
    //     //     theatre.movies.push(movieId);
    //     // })

    //     await Theatre.updateOne(
    //         {_id : theatreId},
    //         {$addToSet: {movies : {$each: movieIds}}},
    //     )
    // }
    // else{
    //     // we need to remove movies
    //     // let savedMovieIds = theatre.movies;
    //     // movieIds.forEach((movieId) => {
    //     //     savedMovieIds = savedMovieIds.filter((smi) => smi.toString() !== movieId.toString())
    //     // })
    //     // theatre.movies = savedMovieIds;

    //     await Theatre.updateOne(
    //         {_id : theatreId},
    //         {$pull: {movies: {$in: movieIds}}}
    //     )
    // }
    // const updatedTheatre = await Theatre.findById(theatreId);
    // return updatedTheatre;
}

//List all movies running in Theatre A
const ListAllMoviesInATheatreService = async (theatreId) => {
    
    const theatre = await Theatre.findById(theatreId)
    .select("name movies")
    .populate({
        path: "movies",
        select: "name"
    })

    if(!theatre){
        throw new ApiError(404, "Theatre not found with given Id")
    }
    return theatre;

}

export {createTheatreService, getATheatreService, getAllTheatresService,
deleteTheatreService, updateATheatreService, updateMoviesInTheatresService,
 ListAllMoviesInATheatreService, checkMovieService};