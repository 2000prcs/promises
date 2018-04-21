/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      console.log('Reading failed', err);
      callback(err, null);
    } else {
      let splited = content.split('\n');
      console.log('Reading successfully completed \n', splited[0]);
      callback(null, splited[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request({
    url: url,
    method: 'GET'
  }, (err, data) => {
    if(err) {
      console.log(err);
      callback(err, null);
    } else {
      console.log('Success: ', data.statusCode);
      callback(null, data.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
