var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var readBuf = new Buffer(1024);
    fs.readFile('./index.html', readBuf, function (err, data){
	if (err) throw err;
	response.send(readBuf.slice(0, data));
})
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

