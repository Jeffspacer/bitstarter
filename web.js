var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var fs = require('fs');
fs.open('readFileSync("index.html")', 'r', function(err, fd) {
  if (err) { throw err }
  var readBuffer   = new Buffer(1024),
      bufferOffset = 0,
      bufferLength = readBuffer.length,
      filePosition = 100;
  fs.read(fd, readBuffer,bufferOffset, bufferLength, filePosition, 
    function(err, readBytes) {
      if (err) { throw err; }
      console.log('just read ' + readBytes + ' bytes');
      if (readBytes > 0) {
        console.log(readBuffer.slice(0, readBytes));
      }      
    }); 
});
