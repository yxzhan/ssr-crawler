var fs = require("fs");
var spide = require('rssspider');
var jsonfile = require('jsonfile')

module.exports = function getNews (name, url) {
  return spide.fetchRss(url).then(function(data) {
    // save to files
    const obj = { list: data }
    const fileName = 'news/' + name + '.json'
    
    jsonfile.writeFile(fileName, obj, function (err) {
      if (err) return console.error(err)
      console.log('Write file done!')
    })
    
    return data
  }).catch(err => {
    console.log(err)
    return err
  })
}
