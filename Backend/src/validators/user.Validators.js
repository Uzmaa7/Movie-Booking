
import { body, param } from "express-validator";

const updateUserRoleOrStatusValidator = () => {
return[

  
  param("id")
    .notEmpty()
    .withMessage("User id is required")
    .bail()
    .isMongoId()
    .withMessage("Invalid user id"),

  
  body("userRole")
    .optional()
    .isIn(["CUSTOMER", "ADMIN", "PENDING"])
    .withMessage("Invalid user role"),

 
  body("userStatus")
    .optional()
    .isIn(["ACTIVE", "BLOCKED", "SUSPENDED"])
    .withMessage("Invalid user status"),

  // Custom validator → at least one field required
  body()
    .custom((value) => {
      if (!value.userRole && !value.userStatus) {
        throw new Error("Either userRole or userStatus is required");
      }
      return true;
    })

];}

export {updateUserRoleOrStatusValidator};