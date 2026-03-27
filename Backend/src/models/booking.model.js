import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({

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

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    timing: {
        type: String,
        required: true,
    },

    totalCost: {
        type: Number,
    },

    noOfSeats: {
        type: Number,
        required: true,
    },

    status: {
        type: String,
        enum: {
            values: ["IN_PROCESS", "CANCELLED", "SUCCESSFULL"],
            message: "Invalid booking status"
        },
        default: "IN_PROCESS",
    }

}, {timestamps:true});

const Booking = mongoose.model("Booking", bookingSchema);

export default bookingSchema;