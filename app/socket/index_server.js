var http = require('http');
var fs = require('fs');

// 获取当前index.html的路径
var server = http.createServer(function (req,res){
    fs.readFile('./index_client.html',function(error,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data,'utf-8');
    });
}).listen(3000,"127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');

var io = require('socket.io').listen(server);
var count = 0;

io.sockets.on('connection',function(socket){
    count++;
    console.log('User connected ' + count + ' user(s) present');
    socket.emit('users',{number:count});
    socket.broadcast.emit('users',{number:count});

    socket.on('disconnect',function(){
        count--;
        console.log('User connected ' + count + ' user(s) present');
        socket.broadcast.emit('users',{number:count});
    });
});

// socket.emit('message',{text:'你上线了'}); // 发给单个用户
// socket.broadcast.emit('message',{'你的好某XXX上线了'});   // 发给所用用户
