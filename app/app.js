const del = require('del')
const fs = require('fs')
const path = require('path')
var jsonfile = require('jsonfile')

const getNews = require('./rssCrawler.js')

// clean old log files
del(['news/*']).then(paths => {
	console.log('Clean old log files:\n', paths.join('\n'));
})

const urlList = {
  'yahoo': 'http://news.yahoo.com/rss/',
  'bbc': 'http://feeds.bbci.co.uk/news/rss.xml',
  'cnn': 'http://rss.cnn.com/rss/edition.rss',
  'techcrunch': 'http://feeds.feedburner.com/Techcrunch/europe',
  'nature': 'http://feeds.nature.com/nature/rss/current',
  'nasa': 'http://www.nasa.gov/rss/image_of_the_day.rss'
}

for (const key in urlList) {
  const url = urlList[key]
  getNews(key, url).then(data => {
    console.log(key, url)
    console.log(data.length)
  })
}


// async function getAllNews (key, url) {
//   return await getNews(key, url).then(data)
// }