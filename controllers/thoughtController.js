const { User, Thought } = require("../models");

module.exports = {

getThought(req, res) {
    Thought.find({})
    .then((thought) => res.json(thought))
    .catch((err) => res.status(500).json(err));
},

getOneThought(req, res) {
    Thought.findOne({_id: req.params.thoughtId})
    .select("-__v")
    .then((thought) =>
    !thought
    ? res.status(404).json({ message: "No thought associated with this ID"})
    : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},



















}