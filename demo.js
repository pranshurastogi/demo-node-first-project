var http = require('http');
const port = process.env.PORT || 3000;

var server = http.createServer((req, res)=> {

res.writeHead(200);

res.end('Hi everybody!, Pranshu Rastogi here');

});

server.listen(port);