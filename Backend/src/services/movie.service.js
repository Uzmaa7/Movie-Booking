import Movie from "../models/movie.model.js"

const createMovieService = async (data) => {
    const movie = await Movie.create(data);
    return movie;
}

const deleteMovieService = async (id) => {
    const response = await Movie.findByIdAndDelete(id);
    return response; 
}

const getMovieByIdService = async (id) => {
    const movie = await Movie.findById(id);
    // if(!movie){
    //     return res.status(400).json({
    //         message : "No movie found for the corresponding id"
    //     })
    // }
    return movie;
}

const updateMovieService = async (id, data) => {
    const movie = await Movie.findByIdAndUpdate(id, data, {new:true, runValidators:true});
    return movie;
}

export {createMovieService, deleteMovieService, getMovieByIdService, updateMovieService};