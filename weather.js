let mongoose = require("mongoose");
let weather = new mongoose.Schema({
  name: {
    type: String,
  },
  temp: {
    type: Number,
  },
  date: {
    type: Date,
  },
});
module.exports = mongoose.model("weather", weather);