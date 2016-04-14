var mongoose = require("mongoose");

var ImageSchema = new mongoose.Schema(
  {
    name: String,
    image_url: String
  }
);

mongoose.model("Image", ImageSchema);
mongoose.connect("mongodb://localhost/image-clicker");

module.exports = mongoose;
