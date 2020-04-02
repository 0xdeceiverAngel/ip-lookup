var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (ip[0] = ':' && ip[1] == ':') {
    ip = ip.slice(7, ip.length);// 有點問題
  }
  console.log(ip);
  request({
    url: `http://api.ipstack.com/${ip}?access_key=82a4433442709cade29d923962fa16d8`,
    method: "GET",
    followRedirect: true,
    maxRedirects: 10
  }, function (error, response, body) {
    console.log(body);
    body = JSON.parse(body);
    res.render('test', {
      ip: body['ip'],
      latitude: body['latitude'],
      longitude: body['longitude'],
      region_name: body['region_name'],
      city: body['city']
    });
  });
});

module.exports = router;
