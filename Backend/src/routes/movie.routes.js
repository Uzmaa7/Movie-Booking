import express from "express";
import { createMovie } from "../controllers/movie.controllers.js";

const movieRouter = express.Router();

movieRouter.post("/create-movie", createMovie);

export default movieRouter;

