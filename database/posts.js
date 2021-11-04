const db_users = require('./users.js');

var db_posts = [
  {
    user: db_users[0],
    post: './posts/downloaded/IDC.txt',
    time: '20:13',
    comments: [
      { name: 'Sam', body: 'Nice' },
      { name: 'Jerry', body: 'Great Read' },
    ],
  },
  {
    user: db_users[1],
    post: './posts/downloaded/milestones.txt',
    time: '16:23',
    comments: [
      { name: 'Bob', body: 'I thought the same !' },
      { name: 'Andy', body: 'Wow how inspiring' },
    ],
  },
  {
    user: db_users[2],
    post: './posts/downloaded/teaching_code.txt',
    time: '09:37',
    comments: [
      { name: 'Julia', body: 'Very interesting' },
      { name: 'Samantha', body: 'Thank you' },
    ],
  },
];

module.exports = db_posts;
