var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var fs = require('fs');
    fs.open('index.html','r',function opened(err, fd){
	if (err) throw err;
	var readBuffer = new Buffer(1024);
	    fs.read(fd, readBuffer, function read (err, readBytes){
	      if (err) throw err;
	      response.send(readBuffer.slice(0, readBytes));
});
});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

