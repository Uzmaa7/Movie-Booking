import express from "express";
import { createMovie, deleteMovie, getMovie, updateMovie } from "../controllers/movie.controllers.js";
import { createMovieValidator , validateMovieId, updateMovieValidator} from "../validators/movie.Validators.js";
import { validate } from "../middlewares/validator.middleware.js";


const movieRouter = express.Router();


movieRouter.post("/create-movie", createMovieValidator(), validate, createMovie);

movieRouter.get("/:id",validateMovieId(), validate, getMovie);

movieRouter.delete("/:id",validateMovieId(), validate,  deleteMovie);

movieRouter.put("/:id",validateMovieId(), updateMovieValidator, validate,  updateMovie);

movieRouter.patch("/:id",validateMovieId(), updateMovieValidator, validate, updateMovie);

export default movieRouter;

