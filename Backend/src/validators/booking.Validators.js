import {body} from "express-validator";

const createBookingValidator = () => {
    return[
        //first we check the format of ID
        //then we check if this ID exist in database or not (booking.Service.js)
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
    ]
}

const updateBookingValidator = () => {
    return[

    ]
}

export {createBookingValidator, updateBookingValidator }