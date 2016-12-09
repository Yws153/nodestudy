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
