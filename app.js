const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "homepage",
    css: ["styles.css"],
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "about my company",
    css: ["styles2.css"],
  });
});

app.listen(8000, () => {
  // console.log("server is ready ! http://localhost:8000");
});
