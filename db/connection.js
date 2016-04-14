var mongoose = require("mongoose");

var ImageSchema = new mongoose.Schema(
  {
    name: String,
    image_url: String,
    quote: String,
    origin: String,
    powers: String
  }
);

mongoose.model("Image", ImageSchema);
mongoose.connect("mongodb://localhost/image-clicker");

module.exports = mongoose;
