var fs = require('fs');
var express = require('express');
var app = express();

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

app.listen(3000);
