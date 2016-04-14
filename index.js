var express = require("express");
var hbs = require("express-handlebars");
var mongoose = require("./db/connection");

var app = express();

var Image = mongoose.model("Image");

app.set("port", process.env.PORT || 3005);

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"));


app.get("/", function(req, res){
    res.render("app-welcome");
});

app.get("/images", function (req, res) {
  Image.find().then(function (images) {
    res.render("images-index", {
      images: images
    });
  });
});

app.get("/images/:name", function(req,res){
  var data = {
    name: req.params.name
  };
  res.render("images-show", {
    image: data
  });
});

app.listen(app.get("port"), function(){
  console.log("were live");
});
