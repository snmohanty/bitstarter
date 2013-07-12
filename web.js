var express = require('express');
var app = express.createServer(express.logger());
var buffer = new Buffer(1024);
var fs = require('fs');

app.get('/', function(request, response) {
    var buffer = fs.readFileSync('index.html', 'utf8');
    response.send(buffer.toString);
});


# var fs = require('fs');
#    fs.open('index.html','r',function opened(err, fd){
#	if (err) throw err;
# console.log('fd  '+ fd);
#	var readBuffer = new Buffer(1024);
#	var buffer = fs.readFileSync('index.html');
#	      if (err) throw err;
# console.log('readBuffer  '+ readBuffer);
#	      response.send(readBuffer.slice(0, readBytes));
#		response.send(readBuffer);
#		response.send(buffer.toString());
# });
# });
# });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

