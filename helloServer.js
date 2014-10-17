var http = require('http');
http.createServer(function(req, res){
res.writeHeader(200,{'Content-type':'text/plain'});
res.end('Hello Wrold\n');
}).listen(8083,"127.0.0.1");
console.log('server nunning at.. ');