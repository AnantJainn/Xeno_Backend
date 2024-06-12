const User = require("../models/user");

exports.createUser = async (req, res) => {
    const { firstName, lastName, mobileNumber, email, role_name, health_facility_name } = req.body;

    if (!firstName || !lastName || !mobileNumber || !email || !role_name || !health_facility_name) {
        return res.status(400).json({
            success: false,
            message: "You have not entered all the deatils. Please Check!!"
        });
    }

    try {

        const existingUserCount = await User.countDocuments();
        const user_id = existingUserCount + 1;


        const newUser = await User.create({ user_id, firstName, lastName, mobileNumber, email });


        res.status(200).json({
            success: true,
            data: newUser,
            message: "User created successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: "Error occured creating user"
        });
    }
};