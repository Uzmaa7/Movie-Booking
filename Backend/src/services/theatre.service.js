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

export {createTheatreService, getATheatreService, getAllTheatresService, deleteTheatreService, updateATheatreService};