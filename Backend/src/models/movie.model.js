import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },

    description : {
        type : String,
        required : true,
    },

    casts : {
        type : [String],
        required: true,
    },

    trailorUrl: {
        type : String,
        required: true,
    },

    language: {
        type : String,
        required: true,
    },

    releaseDate : {
        type : String,
        required: true,
    },

    director : {
        type : String,
        required : true,
    },
    
    releaseStatus : {
        type : String,
        required : true,
        enum: ["RELEASED", "COMING_SOON", "BLOCKED"],
        default: "RELEASED",
    },
    
}, {timestamps:true});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
