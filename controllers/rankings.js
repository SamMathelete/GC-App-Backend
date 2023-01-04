const rankingsRouter = require("express").Router();
const Team = require("../models/team");

rankingsRouter.get("/", async (req, res) => {
  const teams = await Team.find({});
  const sortedTeams = teams
    .map((obj) => obj.toObject())
    .sort((a, b) => b.score - a.score);
  const data = sortedTeams.map((obj, index) => {
    obj.ranking = index + 1;
    delete obj._id;
    return obj;
  });
  res.json(data);
});

module.exports = rankingsRouter;
