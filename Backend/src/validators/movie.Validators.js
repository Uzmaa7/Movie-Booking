import { body , param} from "express-validator";

const createMovieValidator = () => {
    return [
        body("name")
            .trim()
            .notEmpty().withMessage("The name of the movie is not present in request sent")
            .isString().withMessage("name must be a string"),

        body("description")
            .trim()
            .notEmpty().withMessage("The description of the movie is not present in request sent")
            .isLength({ min: 10, max: 30 }).withMessage("the length of description must be between 10 to 30 characters long")
            .isString().withMessage("description must be a string"),

        body("casts")
            .isArray({ min: 1 }).withMessage("Casts must be a non-empty array"),

        //Validate each element inside casts
        body("casts.*")
            .isString().withMessage("Each cast member must be a string")
            .trim()
            .notEmpty()
            .withMessage("Cast name cannot be empty"),

        body("trailorUrl")
            .trim()
            .notEmpty().withMessage("the URL of the movie is missing"),
            // .isURL().withMessage("The trailer URL must be a valid URL"),

        body("language")
            .trim()
            .notEmpty().withMessage("The language of the movies is not present in request")
            .isString().withMessage("language must be a string"),

        body("releaseDate")
            .trim()
            .notEmpty().withMessage("Release date is required")
            // .isISO8601().withMessage("Release date must be a valid date (YYYY-MM-DD)")
            .isString().withMessage("releaseDate must be a string"),

        body("director")
            .trim()
            .notEmpty().withMessage("director name is required")
            .isString().withMessage("director must be a string")
            .isLength({ min: 2 }).withMessage("director name must be at least 2 characters long"),


        body("releaseStatus")
            .trim()
            .notEmpty().withMessage("releaseStatus is required")
            .isIn(["RELEASED", "COMING_SOON", "BLOCKED"]).withMessage("releaseStatus must be RELEASED, COMING_SOON, or BLOCKED"),
    ]
}

const validateMovieId = () => {
  return [
    param("id")
      .notEmpty().withMessage("Movie ID is required")
      .isMongoId().withMessage("Invalid Movie ID format"),
  ];
};

const updateMovieValidator = () => {
     return [
        body("name")
            .optional()
            .trim()
            .notEmpty().withMessage("The name of the movie is not present in request sent")
            .isString().withMessage("name must be a string"),

        body("description")
            .optional()
            .trim()
            .notEmpty().withMessage("The description of the movie is not present in request sent")
            .isLength({ min: 10, max: 30 }).withMessage("the length of description must be between 10 to 30 characters long")
            .isString().withMessage("description must be a string"),

        body("casts")
            .optional()
            .isArray({ min: 1 }).withMessage("Casts must be a non-empty array"),

        //Validate each element inside casts
        body("casts.*")
            .optional()
            .isString().withMessage("Each cast member must be a string")
            .trim()
            .notEmpty()
            .withMessage("Cast name cannot be empty"),

        body("trailorUrl")
            .optional()
            .trim()
            .notEmpty().withMessage("the URL of the movie is missing"),
            // .isURL().withMessage("The trailer URL must be a valid URL"),

        body("language")
            .optional()
            .trim()
            .notEmpty().withMessage("The language of the movies is not present in request")
            .isString().withMessage("language must be a string"),

        body("releaseDate")
            .optional()
            .trim()
            .notEmpty().withMessage("Release date is required")
            // .isISO8601().withMessage("Release date must be a valid date (YYYY-MM-DD)")
            .isString().withMessage("releaseDate must be a string"),

        body("director")
            .optional()
            .trim()
            .notEmpty().withMessage("director name is required")
            .isString().withMessage("director must be a string")
            .isLength({ min: 2 }).withMessage("director name must be at least 2 characters long"),


        body("releaseStatus")
            .optional()
            .trim()
            .notEmpty().withMessage("releaseStatus is required")
            .isIn(["RELEASED", "COMING_SOON", "BLOCKED"]).withMessage("releaseStatus must be RELEASED, COMING_SOON, or BLOCKED"),
    ]
}

export {createMovieValidator, validateMovieId, updateMovieValidator};