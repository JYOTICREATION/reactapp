var express = require("express");
var app = express();
var fs = require("fs");

app.get("/getUsers", function (req, res) {
  fs.readFile(__dirname + "/" + "config.json", "utf8", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

var movie = {
  movie5: {
    id: 5,
    name: "Sholay",
    rating: 3,
    rel_date: "4 - Oct - 1999",
  },
};

app.post("/addMovie", function (req, res) {
  fs.readFile(__dirname + "/" + "config.json", "utf8", function (err, data) {
    data = JSON.parse(data);

    data["movie5"] = movie["movie5"];
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

app.get("/:id", function (req, res) {
  fs.readFile(__dirname + "/" + "config.json", "utf8", function (err, data) {
    var movies = JSON.parse(data);
    var movie = movies["user" + req.params.id];
    console.log(movie);
    res.end(JSON.stringify(movie));
  });
});

var server = app.listen(7000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("listening at http://%s:%s", host, port);
});
