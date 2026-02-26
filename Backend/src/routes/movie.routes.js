import express from "express";
import { createMovie, deleteMovie, getMovie, updateMovie } from "../controllers/movie.controllers.js";
import { createMovieValidator } from "../validators/movie.Validators.js";
import { validate } from "../middlewares/validator.middleware.js";


const movieRouter = express.Router();


movieRouter.post("/create-movie", createMovieValidator(), validate, createMovie);

movieRouter.get("/:id", getMovie);

movieRouter.delete("/:id", deleteMovie);

movieRouter.put("/:id", updateMovie);

movieRouter.patch("/:id", updateMovie);

export default movieRouter;

