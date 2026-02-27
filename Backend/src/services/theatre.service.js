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

const getAllTheatresService = async() => {
    // Find hamesha array dega, isliye yahan check lagane ki zaroorat nahi hai
    const allTheatres = await Theatre.find();

    return allTheatres;
}

export {createTheatreService, getATheatreService, getAllTheatresService};