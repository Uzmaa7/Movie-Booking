import Movie from "../models/movie.model.js";
import { createMovieService,deleteMovieService , getMovieByIdService, updateMovieService} from "../services/movie.service.js";

const createMovie = async (req, res) => {
    try {
        const movie = await createMovieService(req.body);

        return res.status(201).json({
            success: true,
            error: {},
            data: movie,
            message: "Successfully created a new movie",
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error,
            data: {},
            message: "error while creating a new movie."
        })
    }
}

const deleteMovie = async (req, res) => {

    try {
        const response = await deleteMovieService(req.params.id);
        return res.status(200).json({
            success: true,
            error: {},
            data: response,
            message: "Successfully deleted movie ",
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: true,
            error: error,
            data: {},
            message: "Error while deleting movie."
        })
    }
}

const getMovie = async (req, res) => {
    try {
        const movie = await getMovieByIdService(req.params.id);
        return res.status(200).json({
            success :  true,
            error: {},
            message: "Successfully fetched the movie details",
            data: movie,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success :  false,
            error: error,
            message: "Error while fetching the movie details",
            data: {},
        })
    }
}

const updateMovie = async (req, res) => {
    try {
        const movie = await updateMovieService(req.params.id, req.body);
        return res.status(200).json({
            success: true,
            error: {},
            message : "Movie updated successfully",
            data: movie,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success :  false,
            error: error,
            message: "Error while updating the movie.",
            data: {},
        })
    }
}

export {createMovie, deleteMovie, getMovie, updateMovie};