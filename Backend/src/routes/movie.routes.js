import express from "express";
import { createMovie, deleteMovie, getMovie } from "../controllers/movie.controllers.js";

const movieRouter = express.Router();


movieRouter.post("/create-movie", createMovie);

movieRouter.get("/:id", getMovie);

movieRouter.delete("/:id", deleteMovie);

export default movieRouter;

