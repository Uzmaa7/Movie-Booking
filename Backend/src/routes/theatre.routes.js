import express from "express";
import { createTheatre, getATheatre, getAllTheatres,  deleteTheatre, updateATheatre,
    
} from "../controllers/theatre.controllers.js";

const theatreRouter = express.Router();

//CRUD For Theatre
theatreRouter.post("/create-theatre", createTheatre);

theatreRouter.get("/:id", getATheatre);

theatreRouter.get("/", getAllTheatres);

theatreRouter.delete("/:id", deleteTheatre);

theatreRouter.put("/:id", updateATheatre);

export default theatreRouter;