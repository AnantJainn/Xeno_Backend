const mongoose = require("mongoose");
require('dotenv').config();

// console.log(DATABASE_URL)

const connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("Database is connected!!"))
        .catch((error) => {
            console.log("Error connecting Database");
            console.error(error.message);
            process.exit(1);
        });
}

module.exports = connectDB;

