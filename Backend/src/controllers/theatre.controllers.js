import { createTheatreService, getAllTheatresService, getATheatreService,
    deleteTheatreService, updateATheatreService, updateMoviesInTheatresService
 } from "../services/theatre.service.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createTheatre = asyncHandler(async (req, res) => {
    
        const theatre = await createTheatreService(req.body);

        return res.status(201).json(
            new ApiResponse(
                200,
                theatre,
                "Theatre created successfully",    
            )
        )   
})

const getATheatre = asyncHandler(async (req, res) => {
    const theatre = await getATheatreService(req.params.id);

    return res.status(200).json(
        new ApiResponse(200, theatre, "Theatre fetched successfully")
    )
})

const getAllTheatres = asyncHandler(async (req, res) => {

    const allTheatres = await getAllTheatresService(req.query);
    
    if(allTheatres.length === 0){
        return res.status(200).json(
            new ApiResponse(200, [], "No theatres found")
        )
    }

    return res.status(200).json(
        new ApiResponse(200, allTheatres, "All theatres fetched successfully")
    )
})

const deleteTheatre =  asyncHandler(async (req, res) => {
    const {id} = req.params;
    const deletedTheatre = await deleteTheatreService(id);

    return res.status(200).json(
        new ApiResponse(200, deletedTheatre, "Theatre deleted successfully")
    )

})

const updateATheatre = asyncHandler(async (req, res) => {
    const {id} = req.params;
    const data = req.body;

    const updatedTheatre = await updateATheatreService(id, data);

    return res.status(200).json(new ApiResponse(200, updatedTheatre, "Theatre updated successfully"))
})

// (add/Remove)
const updateMoviesInTheatres = asyncHandler(async(req, res) => {
    const {id} = req.params;
    const {movieIds, insert} = req.body;

    const updatedTheatreWithMovies = await updateMoviesInTheatresService(id, movieIds, insert);

    return res.status(200).json(new ApiResponse(200, updatedTheatreWithMovies, "Theatre movies updated successfully"))
})

export {createTheatre, getATheatre, getAllTheatres, deleteTheatre, updateATheatre, updateMoviesInTheatres};