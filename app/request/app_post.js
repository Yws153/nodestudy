var http = require('http');
var querystring = require('querystring')

http.createServer(function(req, res) {

    var postData = '';
    req.addListener('data', function(postDataChunk) {
        postData += postDataChunk;
    })

    req.addListener('end', function() {
        var postStr = JSON.stringify(querystring.parse(postData));
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        response.cookie('haha', 'name1=value1&name2=value2', {maxAge:10*1000, path:'/', httpOnly:true});
        res.end(postStr + '\n' + req.method);
    })
}).listen(1337, '127.0.0.1');  // listen是HTTP对象的一个方法，监听端口和IP，第一个为端口号，Number类型，第二个为可选参数，默认为本地127.0.0.1，为字符串
console.log('server running at http://127.0.0.1:1337/')
