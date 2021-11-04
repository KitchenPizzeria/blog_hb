const generatePosts = require('./feed');
const db = require('../database/posts.js');
const fs = require('fs');
const { describe } = require('yargs');

test('blog posts can be read and imported correctly', () => {
  const value = generatePosts(db);
  expect(value['body']).toBe(fs.readFileSync('IDC.txt', 'utf8'));
});

describe
