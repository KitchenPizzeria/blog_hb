import fs from "fs";

class Post {
  constructor(data, name, user_id, time, colour) {
    this.user = name;
    this.body = data;
    this.time = time;
    this.colour = colour;
    this.user_id = user_id;
  }
}

const generatePosts = (data) => {
    var posts = [];

  for (var eachpost of data) {
    const newPost = new Post(
      fs.readFileSync(eachpost["post"], "utf8"), //data
      eachpost["user"]["name"],
      eachpost["user"]["user_id"],
      "23:34",
      (179, 207, 156)
    );
    //console.log(newPost);
    posts.push(newPost);
  }
  return posts;
};

export default generatePosts;
