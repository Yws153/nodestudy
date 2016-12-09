var url = require('url');
var fs = require('fs');

exports.goIndex = function(res, req) {
	var readPath = __dirname + '/' + url.parse('index.html').pathname;
    var indexPage = fs.readFileSync(readPath);
	res.end(indexPage);
}
