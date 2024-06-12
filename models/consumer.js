const mongoose = require("mongoose");

const consumerSchema = new mongoose.Schema({
    consumer_id: {
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
    lastVisited: {
        type: Date,
        default: Date.now(),
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

module.exports = mongoose.model("Consumer", consumerSchema);
