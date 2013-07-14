var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World2!');
});

var htmlTable = '';
fs.readFile('/etc/passwd', function (err, data) {
  if (err) {
    throw err;
  }
  var parsedData = parseData(data);
  htmlTable = createTable(parsedData);
});

app.get('/htmlTable', function(req, res){
  res.send(htmlTable);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
