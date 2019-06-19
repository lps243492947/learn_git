const request = require('request');

module.exports = (url) =>
  new Promise((resolve, reject) => {
    request({
      url,
      json: true
    }, (err, res, body) => {
      console.log('error', err);
      resolve(body)
    })
  })