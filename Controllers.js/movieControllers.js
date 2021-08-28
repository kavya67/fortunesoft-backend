const Movies = require("../Models/movie");

exports.getAllMovies = async (req, res) => {
  try {
    const sortedMoviesList = await Movies.aggregate()
      .unwind({ path: "$genres" })
      .group({
        _id: "$genres",
        movies: {
          $addToSet: {
            director: "$director",
            imdb_rating: "$imdb_rating",
            length: "$length",
            poster: "$poster",
            title: "$title",
          },
        },
      })
      .project({ _id: 0, category: "$_id", movies: 1 });
    res.json(sortedMoviesList);
  } catch (error) {
    res.json(error.message);
  }
};
