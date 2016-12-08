/**
*
* Node.js 实现 Web 解析 DNS
*/
// 首先 require 加载需要的 Node.js原生模块
var http = require('http');
var dns = require('dns');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	// 获取当前index.html的路径
    var readPath = __dirname + '/' + url.parse('index.html').pathname;
    var indexPage = fs.readFileSync(readPath);
	res.end(indexPage);
}).listen(1337, '127.0.0.1');
console.log('server running at http://127.0.0.1:1337/')
