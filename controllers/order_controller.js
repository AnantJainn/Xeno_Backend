const Consumer = require("../models/consumer");
const Order = require("../models/order");

exports.createOrder = async (req, res) => {
    const { consumer_id, firstName, lastName, email, orderPrice } = req.body;

    if (!firstName || !lastName || !email || !orderPrice) {
        return res.status(400).json({
            success: false,
            message: "You have not entered all the deatils. Please Check!!"
        });
    }

    try {
        const existingOrderCount = await Order.countDocuments();
        const order_id = existingOrderCount + 1;

        const newOrder = await Order.create({
            consumer_id,
            order_id,
            orderPrice
        });

        res.status(200).json({
            success: true,
            data: newOrder,
            message: "Order has been created successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: "Error occured while creating order"
        });
    }
};
