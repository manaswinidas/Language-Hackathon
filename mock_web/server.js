var express = require("express");
var app = express();

app.use(express.static("static"));

app.listen(8080, function() {
  console.log("Server running live at http://localhost:8080/");
});
