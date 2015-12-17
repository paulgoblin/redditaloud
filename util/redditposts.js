'use strict'

var request = require('request');
var cheerio = require('cheerio');

var Redditposts = {}

Redditposts.fetch = function(subreddit, cb){
  request.get(`https://www.reddit.com/r/${subreddit}`, function(err, res, html){
    if (err) return cb(err);
    var $ = cheerio.load(html);
    var posts = $('div.thing');

    var postData = [];
    posts.each((i,el) => {
      postData.push({
        title: $(el).find('a.title.may-blank').text(),
        link: $(el).find('a.title.may-blank').attr('href'),
        score: $(el).find('div.score.unvoted').text()
      })
    })
    cb(null, postData)
  })
}

module.exports = Redditposts
