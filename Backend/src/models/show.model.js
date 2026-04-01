import mongoose from "mongoose";

const showSchema = new mongoose.Schema({

    theatreId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Theatre",
        required: true,
    },

    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true,
    },

    timing: {
        type: String,
        required: true,
    },

    noOfSeats: {
        type: Number,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    }


}, {timestamps: true});

const Show = mongoose.model("Show", showSchema);

export default Show;