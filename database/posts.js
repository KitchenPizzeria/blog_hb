import db_users from "./users.js";

var db_posts = [
  {
    user: db_users[0],
    post: "./posts/markdown.txt",
  },
  {
    user: db_users[1],
    post: "./posts/milestones.txt",
  },
  {
    user: db_users[2],
    post: "./posts/teaching.txt",
  },
];

export default db_posts;
