const express = require("express");
const router = express.Router();

const { createConsumer  } = require("../controllers/consumer_reg_controller");
const { createOrder } = require("../controllers/order_controller");
const { createUser } = require("../controllers/user_reg_controller");

router.post("/registration", createConsumer); 
router.post("/orders",createOrder);
router.post("/user",createUser);

module.exports = router;
