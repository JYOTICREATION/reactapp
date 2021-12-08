const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const port = 7000;
const app = express();
app.use(bodyParser.json());

const db = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "movie",
});
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log("listening at http://localhost:${port}");
});
