import Movie from "../models/movie.model.js"

const createMovie = async (data) => {
    const movie = await Movie.create(data);
    return movie;
}

const deleteMovie = async (id) => {
    const response = await Movie.findByIdAndDelete(id);
    return response; 
}

const getMovieById = async (id) => {
    const movie = await Movie.findById(id);
    if(!movie){
        return resizeBy.status(400).json({
            message : "No movie found for the corresponding id"
        })
    }
    return movie;
}

export {createMovie, deleteMovie, getMovieById};