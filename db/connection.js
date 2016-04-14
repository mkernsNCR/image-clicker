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

if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGODB_URI);
}else{
  mongoose.connect("mongodb://localhost/image-clicker");
}





module.exports = mongoose;
