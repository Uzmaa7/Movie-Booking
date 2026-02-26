import Movie from "../models/movie.model.js";

const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);

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

export {createMovie};