const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const url = `mongodb+srv://fortunesoftuser:${process.env.DB_PWD}@cluster0.10kci.mongodb.net/fortunesoft?retryWrites=true&w=majority`;
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//movie routes
const movieRoutes = require("./Routes/movieRouter");
app.use(movieRoutes);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("=====================================");
    console.log("DB Connected");
    app.listen(port, () => {
      console.log("Server running on PORT:", port);
      console.log("=====================================");
    });
  })
  .catch((err) => console.log("ERR!! DB Connection failed", err));
