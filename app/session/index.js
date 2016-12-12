var express      = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function (req, res) {
    // 检查 session 中的 isVisit 字段是否存在
    // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。
    if (req.cookie.isVisit) {
        req.cookie.isVisit++;
        res.send('<p>第 ' + req.cookie.isVisit + '次来此页面</p>');
    } else {
        req.cookie.isVisit = 1;
        res.send("欢迎第一次来这里");
        console.log("Cookies: ", req.cookies); //打印cookie
    }
});
app.listen(3000);



// var express = require('express');
// var session = require('session');
// var app = express();
//
// app.use(session({
//     secret: 'hubwiz app', //secret的值建议使用随机字符串
//     cookie: {maxAge: 60 * 1000 * 30} // 过期时间（毫秒）
// }));
// app.get('/', function (req, res) {
//     if (req.session.sign) {//检查用户是否已经登录
//         console.log(req.session);//打印session的值
//         res.send('welecome <strong>' + req.session.name + '</strong>, 欢迎你再次登录');
//     } else {//否则展示index页面
//         req.session.sign = true;
//         req.session.name = '汇智网'；
//         res.end('欢迎登陆！');
//     }
// });
// app.listen(3000);
