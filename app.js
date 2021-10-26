const express = require("express");
const exphbs = require("express-handlebars");
const blog_post = require("markdown.txt");

const app = express();

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    post: {
      user: "Joseph",
      time: "16:40",
      body: blog_post,
      comments: [],
    },
  });
});

app.listen(3000, () => {
  console.log("The web server has started on port 3000");
});
