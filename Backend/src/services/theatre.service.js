import Theatre from "../models/theatre.model.js";

const createTheatreService = async(data) => {
   try {
     const response = await Theatre.create(data);
     return response;
   } catch (error) {
        throw error;
   }
}

export {createTheatreService};