var express = require('express');
var app = express();
var http = require('http').Server(app);
// var APP_ROOT_PATH = __dirname + '/../../public';
var APP_ROOT_PATH = __dirname + '/../public';

app.use("/", express.static(APP_ROOT_PATH));
// console.log(__dirname+ '/../../public');
app.get('', function(req, res) {
  res.sendFile("index.html", {"root": APP_ROOT_PATH});
});

app.get('/', function(req, res) {
  res.sendFile("index.html", {"root": APP_ROOT_PATH});
});

app.get('/*', function(req, res) {
  res.sendFile("index.html", {"root": APP_ROOT_PATH});
});

var port = process.env.PORT || 5000;
http.listen(port);

// app.set('port', (process.env.PORT || 5000));
// app.use(express.static(APP_ROOT_PATH));



// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'));
// });