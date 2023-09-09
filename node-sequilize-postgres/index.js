const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// env configuration
require("dotenv").config();

// routes
const routes = require("./routes");
routes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
