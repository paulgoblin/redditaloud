var express = require('express');
var router = express.Router();
var Redditposts = require('../util/redditposts');

router.get('/:subreddit', function(req, res, next) {
  Redditposts.fetch(req.params.subreddit, function(err, posts){
    res.status(err ? 400 : 200).send(err || JSON.stringify(posts))
  })
});

module.exports = router;
