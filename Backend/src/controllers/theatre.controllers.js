import { createTheatreService } from "../services/theatre.service.js";

const createTheatre = async (req, res) => {
    try {
        const theatre = await createTheatreService(req.body);
         return res.status(201).json({
            success:true,
            message: "theatre created successfully",
            error: {},
            data: theatre,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success :  false,
            error: error.message,
            message: "Error while creating theatre.",
            data: {},
        })
    }
}

const getATheatre = async (req, res) => {

}

const getAllTheatres = async (req, res) => {

}

const deleteTheatre = async (req, res) => {

}

const updateATheatre = async (req, res) => {

}

export {createTheatre, getATheatre, getAllTheatres, deleteTheatre, updateATheatre};