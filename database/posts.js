const db_users = require('./users.js');

var db_posts = [
  {
    user: db_users[0],
    post: './posts/downloaded/IDC.txt',
  },
  {
    user: db_users[1],
    post: './posts/downloaded/milestones.txt',
  },
  {
    user: db_users[2],
    post: './posts/downloaded/teaching_code.txt',
  },
];

module.exports = db_posts;
