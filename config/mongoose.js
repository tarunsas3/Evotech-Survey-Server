const mongoose = require("mongoose");

exports.connect = () => {
  mongoose
    .connect(
      "mongodb+srv://Tarun:F1olm844YkEm0iGN@cluster0.7uzyjbw.mongodb.net/data"
    )
    .then(console.log("successfully connected to MongoDB"))
    .catch((err) => {
      console.log("Failed to connect to MongoDB", err);
    });
};
