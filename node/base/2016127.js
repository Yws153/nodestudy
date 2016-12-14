/**
*
* Node.js base server
*/
var http = require('http');  //获取Node原生模块提供的HTTP模块对象
http.createServer(function(req, res) {   //使用HTTP对象API方法createServer来创建服务器
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World\n');

}).listen(1337, '127.0.0.1');  // listen是HTTP对象的一个方法，监听端口和IP，第一个为端口号，Number类型，第二个为可选参数，默认为本地127.0.0.1，为字符串
console.log('server running at http://127.0.0.1:1337/')
