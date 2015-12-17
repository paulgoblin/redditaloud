'use strict'

var request = require('request');
var cheerio = require('cheerio');

var REDDIT_URL = 'https://www.reddit.com'

var Redditposts = {}
var lastFetchTime = 0;
var postsCache = [];

Redditposts.fetch = function(subreddit, cb){
  request.get(`${REDDIT_URL}/r/${subreddit}`, function(err, res, html){
    if (err) return cb(err);
    // if (lastFetchTime > (Date.now - 5*60*1000)) return cb(null, postsCache);
    var $ = cheerio.load(html);
    var posts = $('div.thing');

    postsCache = [];
    posts.each((i,el) => {
      postsCache.push({
        title: $(el).find('a.title.may-blank').text(),
        link: REDDIT_URL + $(el).find('a.title.may-blank').attr('href'),
        score: $(el).find('div.score.unvoted').text()
      })
    })
    cb(null, postsCache)
  })
}

module.exports = Redditposts
