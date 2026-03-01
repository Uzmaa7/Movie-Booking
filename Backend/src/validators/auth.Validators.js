import { body } from "express-validator";

const registerValidator = () => {
  return [
    body("name")
        .notEmpty().withMessage("Name is required")
        .isLength({ min: 3 }).withMessage("Name must be at least 3 characters long"),

    
    body("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Enter a valid email"),


    
    body("password")
        .notEmpty().withMessage("Password is required")
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long")
    //     .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/)
    //     .withMessage("Password must contain at least one letter and one number"),
    ]
}

const loginValidator = () => {
  return [
    body("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Enter a valid email"),
    
    body("password")
        .notEmpty().withMessage("Password is required")
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long")
    //     .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/)
    //     .withMessage("Password must contain at least one letter and one number"),
    ]
}

export {registerValidator, loginValidator};