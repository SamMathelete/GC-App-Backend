const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  teamName: String,
  score: Number,
});

teamSchema.set("toJSON", {
  transform: (document, object) => {
    object.id = object._id.toString();
    delete object._id;
    delete object.__v;
  },
});

module.exports = mongoose.model("Team", teamSchema);
