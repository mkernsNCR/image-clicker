var mongoose = require("./connection");
var seedData = require("./seeds");
var Image = mongoose.model("Image");

Image.remove().then(function() {
  Image.collection.insert(seedData).then(function(){
    process.exit()    
  })
});
