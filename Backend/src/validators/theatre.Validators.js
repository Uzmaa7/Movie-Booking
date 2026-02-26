import {body, params, query} from "express-validator";

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

export {createTheatreValidator};