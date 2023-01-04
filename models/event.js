const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: String,
  venue: String,
  date: Date,
  info: String,
  stream: String, //tech OR cult OR sport
  participants: [], //add reference to person schema here.
  isLive: Boolean,
});

eventSchema.set("toJSON", {
  transform: (document, object) => {
    object.id = object._id.toString();
    delete object._id;
    delete object.__v;
  },
});

module.exports = mongoose.model("Event", eventSchema);
