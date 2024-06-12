const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        default: 1
    },
    createdBy: {
        type: Number,
        default: 1
    },
    createdDate: {
        type: Date,
        default: Date.now(),
    }



}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
