import { updateUserRoleOrStatusService } from "../services/user.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const updateUserRoleOrStatus =  asyncHandler(async(req, res) => {
    const {id} = req.params;
    

    const response = await updateUserRoleOrStatusService(id, req.body);
    return res.status(200).json(new ApiResponse (200, response, "updated successfully"))
})

export {updateUserRoleOrStatus};