var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
    var buffer = fs.readFileSync('index.html', 'utf8', function (err, data);{
	if (err) throw err;
	console.log(buffer);
});
response.send (buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

