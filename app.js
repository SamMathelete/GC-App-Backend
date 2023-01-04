const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./utils/config");
const rankingsRouter = require("./controllers/rankings");
const scheduleRouter = require("./controllers/schedule");

const app = express();

console.log("Connecting to mongoDB server...");
mongoose.set("strictQuery", true);
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("Connected to mongoDB.");
  })
  .catch((err) => {
    console.log("Failed to connect to mongoDB: ", err.message);
  });

app.use(cors());
app.use(express.json());

app.use("/api/rankings", rankingsRouter);
app.use("/api/schedule", scheduleRouter);

module.exports = app;
