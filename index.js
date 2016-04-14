var express = require("express");
var hbs = require("express-handlebars");
var mongoose = require("./db/connection");
var parser = require("body-parser");

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
app.use(parser.urlencoded({extended: true}));


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
  Image.findOne({
    name: req.params.name
  }).then(function(image){
    res.render("images-show",{
      image: image
    });
  });
});

app.post("/images", function(req, res){
  Image.create(req.body.image).then(function(image){
    res.redirect("/images/" + image.name);

  });
});

app.listen(app.get("port"), function(){
  console.log("were live");
});
