const mongoose = require("mongoose");

const { Schema } = mongoose;

const movieSchema = new Schema({});

module.exports = mongoose.model("Movies", movieSchema);
