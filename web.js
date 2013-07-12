var express = require('express');
var fs = require('fs');
var buffer = new buffer(256);

var app = express.createServer(express.logger());

fs.readFile('index.html', function(err, data){
    if (err) throw err;
    buffer = data;
})

app.get('/', function(request, response) {
  response.send(buffer.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
