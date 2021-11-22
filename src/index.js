const express = require('express');
const { engine } = require('express-handlebars');

const db_posts = require('../database/posts.js');
const generatePosts = require('./feed.js');

const app = express();
var port = normalizePort(process.env.PORT || '3000');

app.engine(
  'hbs',
  engine({
    defaultLayout: 'main',
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');

app.listen(port, () => {
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
