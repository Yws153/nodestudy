/**
*
* Node.js 实现 Web 解析 DNS 2
*/
var http = require('http');
var dns = require('dns');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	req.setEncoding("utf8");
	res.writeHead(200, { 'Content-Type': 'text/html' });

	router(res, req, pathname);
    
}).listen(1337, '127.0.0.1');
console.log('server running at http://127.0.0.1:1337/')

function router(res, req, pathname) {
	switch (pathname) {
		case "/parse":
			parseDns(res, req)
		break;
		default:
			goIndex(res, req)
	}
}

/**
*
* @params res http请求与响应
*/
function goIndex(res, req) {
	var readPath = __dirname + '/' + url.parse('index.html').pathname;
    var indexPage = fs.readFileSync(readPath);
	res.end(indexPage);
}

function parseDns(res, req) {
	var postData = "";
	req.addListener("data", function(postDataChunk) {
		console.log('data',postDataChunk)
		postData += postDataChunk;
	});

	req.addListener("end", function() {
		console.log('end')
		var retData = getDns(postData, function(domain, addresses) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end('<html><head><meta charset="UTF-8"><title>DNS查询</title></head><body><div id="path">Domain: <span style="color: red">" + domain + "</span>IP: <span style="color: red">" + addresses.join(',')  + "</span></div></body></html>')
		});
		return;
	});
}

function getDns(postData, callback) {

	var domain = querystring.parse(postData).search_dns;

	dns.resolve(domain, function(err, addresses) {
		if (!addresses) {
			addresses = ["不存在域名"]
		}
		callback(domain, addresses);
	})
}
