import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({

    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: true,
    },

    amount: {
        type: Number,
        required: true,
    },

    status: {
        type: String,
        enum: {
            values: ["SUCCESS", "FAILED", "PENDING"],
            message: "Invalid payment status"
        },
        default: "PENDING",
    }

}, {timestamps:true});

const Payment = mongoose.model("Payment", paymentSchema);

export default paymentSchema;