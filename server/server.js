var express = require('express');
var app = express();
var APP_ROOT_PATH = __dirname + '/ ./public';

app.set('port', (process.env.PORT || 5000));
app.use(express.static(APP_ROOT_PATH));

app.get('/', function(req, res) {
  res.sendFile("index.html", {"root": APP_ROOT_PATH});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});