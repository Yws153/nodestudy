# node学习笔记

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
