var express = require("express");
var hbs = require("express-handlebars");

var app = express();

app.get("/", function(req, res){

    res.send("Hello");
});

app.listen(3005, function(){
  console.log("were live");
});
