const express = require("express");
const connectDB = require("./app");
const routes = require("./routers/routes");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Routes are working</h1>`);
});

app.use("/v1/api", routes);

connectDB();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));