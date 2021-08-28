const express = require("express");

const router = express.Router();

const { getAllMovies } = require("../Controllers.js/movieControllers");

router.get("/movies", getAllMovies);

module.exports = router;
