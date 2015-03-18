var gulp        = require('gulp');
var express     = require('express');
var livereload  = require('connect-livereload');
var tinylr      = require('tiny-lr');
var url         = require('url');

var config = {
  lrport : Math.floor(Math.random() * (700) + 35300),
  serverport : 4000
};

var server = express();
var APP_ROOT_PATH = __dirname + '/../public';

module.exports = function() {
  global.lrserver = tinylr();

  server.use(livereload({
    port: config.lrport
  }));

  server.use("/", express.static(APP_ROOT_PATH));

  // server.get('', function(req, res) {
  //   console.log('serve index.html');
  //   res.sendFile("index.html", {"root": APP_ROOT_PATH});
  // });

  server.get('/', function(req, res) {
    console.log('serve index.html');
    res.sendFile("index.html", {"root": APP_ROOT_PATH});
  });

  server.get('*', function(req, res) {
    res.sendFile("index.html", {"root": APP_ROOT_PATH});
  });

  server.listen(config.serverport);
  global.lrserver.listen(config.lrport);
};
