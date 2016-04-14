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

if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGOLAB_URL);
}else{
  mongoose.connect("mongodb://localhost/image-clicker");
}
