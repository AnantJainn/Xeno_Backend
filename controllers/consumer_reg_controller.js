const Consumer = require("../models/consumer");

exports.createConsumer = async (req, res) => {
    const { firstName, lastName, email } = req.body;

    if (!firstName || !lastName || !email) {
        return res.status(400).json({
            success: false,
            message: "You have not entered all the deatils. Please Check!!"
        });
    }
    try {

        const existingUserCount = await Consumer.countDocuments();
        const consumer_id = existingUserCount + 1;


        const newUser = await Consumer.create({ consumer_id, firstName, lastName, email });


        res.status(200).json({
            success: true,
            data: { newUser },
            message: "New Consumer created"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: "Error occured while creating consumer"
        });
    }
};