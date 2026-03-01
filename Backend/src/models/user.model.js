import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique: true,
    },

    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true,
    },

    password: {
        type: String,
        required:true,
        minLength: 8,
    },

    userRole: {
        type: String,
        required: true,
        default: "CUSTOMER",
    },

    userStatus: {
        type: String,
        required: true,
        default: "APPROVED"
    }
}, {timestamps: true});

userSchema.pre("save", async function(){
    //add a check so password is only hashed when modified:
    //Why this is important?
    //If you update a user (like changing name), you don't want to hash the already hashed password again.
    if(!this.isModified("password")) return

   const hashedPassword =  await bcrypt.hash(this.password, 10);
   this.password = hashedPassword;
   
})


userSchema.methods.isPasswordMatched = async function(plainpassword){
    return await bcrypt.compare(plainpassword, this.password);
    
}


const User = mongoose.model("User", userSchema);
export default User;