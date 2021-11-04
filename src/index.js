const express = require('express');
const exphbs = require('express-handlebars');
const db_posts = require('../database/posts.js');
const generatePosts = require('./feed.js');

const app = express();

app.engine(
  'hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');

app.listen(3000, () => {
  console.log('[LAUNCHED] http://localhost:3000/');
});

// ROUTES
app.get('/', (req, res) => {
  var posts = generatePosts(db_posts);
  res.render('post-card', { posts: posts, comments: posts['comments'] });
  //res.send('main', { posts: posts });
});

app.get('/add', (req, res) => {
  res.render('add-blog');
});

app.get('/connections', (req, res) => {
  res.render('connections');
});

app.get('/comments', (req, res) => {
  res.render('comments');
});

module.export = app;
