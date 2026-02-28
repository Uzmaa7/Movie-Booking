import {body, param, query} from "express-validator";

const createTheatreValidator = () => {
    return [
        body("name")
            .notEmpty().withMessage("Theatre name is required")
            .isLength({ min: 2, max: 20 }).withMessage("Theatre name must be between 2 to 20 characters")
            .isString().withMessage("name must be a string"),

        body("description")
            .optional()
            .isString().withMessage("description must be  string")
            .isLength({ min: 2, max: 20 })
            .withMessage("Description must be between 2 to 20 characters"),

        body("city")
            .notEmpty().withMessage("City is required")
            .isString().withMessage("city must be  string")
            .isLength({ min: 2 })
            .withMessage("City must be at least 2 characters long"),

        body("pincode")
            .notEmpty().withMessage("Pincode is required")
            .isInt().withMessage("Pincode must be a number")
            .isLength({ min: 6, max: 6 })
            .withMessage("Pincode must be exactly 6 digits"),

        body("address")
            .optional()
            .isLength({ min: 5 })
            .withMessage("Address must be at least 5 characters long"),
    ]
}

const idValidator = () => {
    return[
    param("id")
    .isMongoId().withMessage("Invalid id")
    .notEmpty().withMessage("id is required")
    ]
    
}

const updateMoviesInTheatresValidator = () => {
    return[
        body("movieIds")
        .isArray({min:1}).withMessage("movieIds must be an array and cannot be empty"),

        body("movieIds.*")
        .isMongoId().withMessage("Each ID in movieIds must be a valid Mongo ObjectId"),

        body("insert")
        .notEmpty().withMessage("Insert parameter is missing")
         .bail()
        .isBoolean().withMessage("Insert must be a boolean value (true/false)")

    ]
}
export {createTheatreValidator, idValidator, updateMoviesInTheatresValidator};