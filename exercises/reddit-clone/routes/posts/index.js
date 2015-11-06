var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/reddit-clone');
var posts = db.get('posts');

/* GET home page. */
router.get('/', function(req, res, next) {
  posts.find({}).then(function(posts){
    res.json(posts);
  });
});

module.exports = router;
