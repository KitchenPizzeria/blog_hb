const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const posts = require("./app.js");

app.use("/blog", express.static(__dirname + "~/blog"));

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  console.log(res);
  res.render("post-card", { posts: posts });
});

app.get("/connections", (req, res) => {
  res.render("connections");
});

app.get("/comments", (req, res) => {
  res.render("comments");
});

app.listen(3000, () => {
  console.log("[LAUNCHED] http://localhost:3000/");
});

module.exports = app;
