const scheduleRouter = require("express").Router();
const Event = require("../models/event");

scheduleRouter.get("/", async (req, res) => {
  const events = await Event.find({});
  res.json(events);
});

module.exports = scheduleRouter;
