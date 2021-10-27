var fs = require("fs");

class Post {
  constructor(data, name, time, colour) {
    this.user = name;
    this.body = data;
    this.time = time;
    this.colour = colour;
  }
}

var data = fs.readFileSync("./posts/markdown.txt", "utf8");
const Post1 = new Post(data, "Joseph", "16:43", (179, 207, 156));
var data = fs.readFileSync("./posts/teaching.txt", "utf8");
const Post2 = new Post(data, "Phillip", "20:10", (255, 255, 255));
var data = fs.readFileSync("./posts/milestones.txt", "utf8");
const Post3 = new Post(data, "Khizar", "09:30", (0, 0, 0));
var posts = [Post1, Post2, Post3];

module.exports = posts;
