import express from "express";
import { createTheatre, getATheatre, getAllTheatres,  deleteTheatre, updateATheatre,
updateMoviesInTheatres
} from "../controllers/theatre.controllers.js";

import { createTheatreValidator, idValidator, updateMoviesInTheatresValidator } from "../validators/theatre.Validators.js";
import {validate} from "../middlewares/validator.middleware.js"

const theatreRouter = express.Router();

//CRUD For Theatre
theatreRouter.post("/create-theatre",createTheatreValidator(), validate, createTheatre);

theatreRouter.get("/:id",idValidator(), validate, getATheatre);

theatreRouter.get("/", getAllTheatres);

theatreRouter.delete("/:id",idValidator(), validate, deleteTheatre);

theatreRouter.patch("/:id",idValidator(), validate, updateATheatre);

theatreRouter.put("/:id",idValidator(), validate, updateATheatre);


//ASSOCIATE MOVIE_THEATRE
theatreRouter.patch("/:id/movies", idValidator(), updateMoviesInTheatresValidator(), validate, updateMoviesInTheatres);

export default theatreRouter;