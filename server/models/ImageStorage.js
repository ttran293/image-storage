const mongoose = require("mongoose");

const ImageStorage = new mongoose.Schema({
  name: { type: String, require: true },
});

module.exports = mongoose.model("ImageStorage", ImageStorage);
