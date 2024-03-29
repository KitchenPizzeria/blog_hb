const fs = require('fs');

class Post {
  constructor(data, name, user_id, time, colour, comments) {
    this.user = name;
    this.body = data;
    this.time = time;
    this.colour = colour;
    this.user_id = user_id;
    this.comments = comments;
  }
}

const generatePosts = (data) => {
  var posts = [];

  for (var eachpost of data) {
    const newPost = new Post(
      fs.readFileSync(eachpost['post'], 'utf8'), // data
      eachpost['user']['name'],
      eachpost['user']['user_id'],
      eachpost['time'],
      (179, 207, 156),
      eachpost['comments']
    );
    //  console.log(newPost);
    posts.push(newPost);
  }
  return posts;
};

module.exports = generatePosts;
