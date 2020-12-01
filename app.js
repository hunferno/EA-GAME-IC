const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");

app.set("view engine", "hbs");

app.get(["/", "/index"], (req, res) => {
  res.render("index", {
    pageTitle: "Home Page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "About Page",
  });
});

app.listen(8000, () => {});
