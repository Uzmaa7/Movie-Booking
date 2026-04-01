import {body} from "express-validator";

const createShowValidator = () => {
    return[
        body("theatreId")
            .trim()
            .notEmpty().withMessage("theatreId is required")
            .isMongoId().withMessage("Invalid theatreId provided"),
        
        body("movieId")
            .trim()
            .notEmpty().withMessage("movieId is required")
            .isMongoId().withMessage("Invalid movieId provided"),
        
        body("timing")
            .notEmpty().withMessage("No movie timing passed"),
        
        body("noOfSeats")
            .notEmpty().withMessage("No seat provided"), 
        
        body("price")
            .notEmpty().withMessage("No price information is provided")
    ]
}

export {createShowValidator};