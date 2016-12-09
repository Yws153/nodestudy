var ParseDns = require('./parse_dns.js')
var MainIndex = require('./main_index.js')

exports.router = function(res, req, pathname) {
	switch (pathname) {
		case "/parse":
			ParseDns.parseDns(res, req)
		break;
		default:
			MainIndex.goIndex(res, req)
	}
}
