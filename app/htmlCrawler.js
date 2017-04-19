var Crawler = require("crawler");
var fs = require("fs");

const list = [
  // 'https://www.yahoo.com/news',
  // 'https://www.bbc.com/news',
  'http://rss.cnn.com/rss/edition.rss',
  // 'https://news.cnn.com/',
  // 'https://news.foxnews.com/',
  // 'https://abcnews.go.com/',
]

var crawler = new Crawler({
  maxConnections : 10,
  callback: function (error, res, done) {
    if (error) return console.log(error);
    if (error) return console.log(error)
    var $ = res.$;
    const body = res.body
    const linkArr = []
    
    $('cite').each(function() {
      console.log(this.text())
    })

    // write file
    const info = res.body
    fs.writeFile('test.html', info, function (err, data) {
      if (err) return console.log(err)
      console.log('Write file done!')
    })
    done();
  }
});
crawler.queue(list);
