# node学习笔记
[[参考文档](http://www.jq-school.com/api/nodejs/api.html#t1)](#)

## **Node.js的API列表**

| 模块名            | API名        | 作用            | 调用示例  |
| :--------------- | :----------- | -------------- | -------- |
| HTTP | http.createServer([requestListener]|创建HTTP服务器 | http.createServer(function(req, res) {}).listen(1337, '127.0.0.1') |

## **exports**

* exports 是给 model.exports 添加属性和方法，最终都是通过 model.exports 替代；
* model.exports 方法可以单独返回一个数据类型，而 exports 只能返回一个 object 对象；
* model.exports 对象和 require 返回的对象数据是相同的；

## **express**

* 执行 express app 报错： express3+已经把创建一个APP的功能分离出来为express-generator，没它你创建不了应用程序
* ```
install dependencies:
    $ cd app && npm install
run the app:
    $ DEBUG=app:* npm start
```

## **jade模板**

* #{title} 为可传递变量；
* 语法；

## **forever模块**

* 后台服务器运行，监控运行日志，以及HTTP请求日志；
* 确保项目的正常运行；
* 查看帮助: forever -help，启动方式例子
```
forever start -l forever.log -o out.log -e err.log app.js
```
* 扩展[[netstat](https://linux.cn/article-2434-1.html)](#)

## **socket.io模板**

* 应用于实时的长连接多请求项目中，如实时聊天；

## **request模板**

* request 模块为 node.js 开发者提供简单的访问 HTTP 请求的方法；

## **cookie的两种方案**

* 比较重要的属性

name=value：键值对，可以设置要保存的 Key/Value，注意这里的 name 不能和其他属性项的名字一样

Expires： 过期时间（秒），在设置的某个时间点后该 Cookie 就会失效，如 expires=Wednesday, 09-Nov-99 23:12:40 GMT

maxAge： 最大失效时间（毫秒），设置在多少后失效

secure： 当 secure 值为 true 时，cookie 在 HTTP 中是无效，在 HTTPS 中才有效

Path： 表示 cookie 影响到的路，如 path=/。如果路径不能匹配时，浏览器则不发送这个Cookie

httpOnly：是微软对COOKIE做的扩展。如果在COOKIE中设置了“httpOnly”属性，则通过程序（JS脚本、applet等）将无法读取到COOKIE信息，防止XSS攻击产生

* 使用response.writeHead
```
var today = new Date();
var time = today.getTime() + 60*1000;
var time2 = new Date(time);
var timeObj = time2.toGMTString();
response.writeHead({
   'Set-Cookie':'myCookie="type=ninja", "language=javascript";path="/";
   Expires='+timeObj+';httpOnly=true'
});
```
缺点：使用response.writeHead只能发送一次头部，即只能调用一次，且不能与response.render共存，否则会报错。
* 使用response.cookie
```
response.cookie('haha', 'name1=value1&name2=value2', {
maxAge:10*1000, path:'/', httpOnly:true
});
```

## **session**

* options
name: 设置 cookie 中，保存 session 的字段名称，默认为 connect.sid 。

store: session 的存储方式，默认存放在内存中，也可以使用 redis，mongodb 等。express 生态中都有相应模块的支持。

secret: 通过设置的 secret 字符串，来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改。

cookie: 设置存放 session id 的 cookie 的相关选项，默认为 (default: { path: ‘/’, httpOnly: true, secure: false, maxAge: null })

genid: 产生一个新的 session_id 时，所使用的函数， 默认使用 uid2 这个 npm 包。

rolling: 每个请求都重新设置一个 cookie，默认为 false。

resave: 即使 session 没有被修改，也保存 session 值，默认为 true。

* eg
```
var express = require('express');
var session = require('session');
var app = express();

app.use(session({
    secret: 'hubwiz app', //secret的值建议使用随机字符串
    cookie: {maxAge: 60 * 1000 * 30} // 过期时间（毫秒）
}));
app.get('/', function (req, res) {
    if (req.session.sign) {//检查用户是否已经登录
        console.log(req.session);//打印session的值
        res.send('welecome <strong>' + req.session.name + '</strong>, 欢迎你再次登录');
    } else {//否则展示index页面
        req.session.sign = true;
        req.session.name = '汇智网'；
        res.end('欢迎登陆！');
    }
});
app.listen(80);
```
以上来自《node.js开发实战详解》，以下来自nodeAPI文档。

## 概要

* global
* process
* require()
* require.resolve()
* require.paths
* __filename
* __dirname
* module

## 定时器

* setTimeout(callback, delay, [arg], [...])
* clearTimeout(timeoutId)
* setInterval(callback, delay, [arg], [...])
* clearInterval(intervalId)

## process？
