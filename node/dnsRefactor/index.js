var http = require('http');
var url = require('url');
var router = require('./router.js')

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	req.setEncoding("utf8");
	res.writeHead(200, { 'Content-Type': 'text/html' });

	router.router(res, req, pathname);

}).listen(1337, '127.0.0.1');
console.log('server running at http://127.0.0.1:1337/')
