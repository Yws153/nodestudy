var querystring = require('querystring');
var dns = require('dns');

exports.parseDns = function(res, req) {
	// console.log(req)
	var postData = "";
	req.addListener("data", function(postDataChunk) {
		postData += postDataChunk;
	});
 	// postData = 'search_dns=23'
	req.addListener("end", function() {
		var retData = getDns(postData, function(domain, addresses) {
			// addresses = [ '30.250.11.135' ]
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end('<html><head><meta charset="UTF-8"><title>查询结果</title></head><body><div style="text-align: center">domain : <span style="color: red">'+ domain +'</span><br/>addresses : <span style="color: red">'+ addresses.join(',') +'</span><div></body></html>');
		});
		return;
	});
}

function getDns(postData, callback) {
	var domain = querystring.parse(postData).search_dns;
	// domain = 23
	dns.resolve(domain, function(err, addresses) {
		// addresses = [ '30.250.11.135' ]
		if (!addresses) {
			addresses = ["不存在域名"]
		}
		callback(domain, addresses);
	})
}
