var express = require('express');
var router = express.Router();
var Redditposts = require('../util/redditposts');

router.get('/posts/:subreddit', function(req, res, next) {
  Redditposts.fetch(req.params.subreddit, function(err, posts){
    res.status(err ? 400 : 200).send(err || JSON.stringify(posts))
  })
});

router.post('/content', function(req, res, next) {
  console.log(req.body);
  Redditposts.fetchPostContent(req.body.url, function(err, content){
    res.status(err ? 400 : 200).send(err || content)
  })
});

module.exports = router;
