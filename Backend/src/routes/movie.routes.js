import express from "express";
import { createMovie, deleteMovie, getMovie, getMovies, updateMovie } from "../controllers/movie.controllers.js";
import { createMovieValidator , validateMovieId, updateMovieValidator} from "../validators/movie.Validators.js";
import { validate } from "../middlewares/validator.middleware.js";
import {isAdminOrClient, verifyJWT } from "../middlewares/auth.middleware.js";



const movieRouter = express.Router();

// CRUD operations for Movie
movieRouter.post("/create-movie", verifyJWT, isAdminOrClient, createMovieValidator(), validate, createMovie);

movieRouter.get("/:id",validateMovieId(), validate, getMovie);

movieRouter.delete("/:id",validateMovieId(), validate,  deleteMovie);

movieRouter.put("/:id",validateMovieId(), updateMovieValidator, validate,  updateMovie);

movieRouter.patch("/:id",validateMovieId(), updateMovieValidator, validate, updateMovie);

movieRouter.get("/", getMovies)
export default movieRouter;

