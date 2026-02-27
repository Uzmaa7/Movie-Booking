import express from "express";
import { createTheatre, getATheatre, getAllTheatres,  deleteTheatre, updateATheatre,

} from "../controllers/theatre.controllers.js";

import { createTheatreValidator, idValidator } from "../validators/theatre.Validators.js";
import {validate} from "../middlewares/validator.middleware.js"

const theatreRouter = express.Router();

//CRUD For Theatre
theatreRouter.post("/create-theatre",createTheatreValidator(), validate, createTheatre);

theatreRouter.get("/:id",idValidator(), validate, getATheatre);

theatreRouter.get("/", getAllTheatres);

theatreRouter.delete("/:id",idValidator(), validate, deleteTheatre);

theatreRouter.patch("/:id",idValidator(), validate, updateATheatre);

export default theatreRouter;