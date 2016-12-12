// /**
// *
// * 设置路径全局变量
// */
// global.BASE_DIR = __dirname;
// global.APP = BASE_DIR + "/app/";
// global.CON = APP + "/controller/";
// global.CORE = APP + "/core/";
// global.LIB = BASE_DIR + "/node_modules/";
// global.CONF = BASE_DIR + "/conf/";
// global.PUBLIC = BASE_DIR + "/public/";
// global.VIEW = BASE_DIR + "/view/";
//
// /**
// *
// * modules引入
// */
// global.lib = {
//     http        : require('http'),
//     fs          : require('fs'),
//     url         : require('url'),
//     querystring : require('querystring'),
//     // httpParam   : require(LIB + 'http_param'),
//     // staticModule: require(LIB + 'static_module'),
//     router      : require(CORE + 'router'),
//     // action      : require(CORE + 'action'),
//     pug         : require('pug'),
//     socket      : require('socket.io'),
//     path        : require('path'),
//     parseCooKie : require('connect').utils.parseCooKie,
//     session     : require(LIB + 'node_session'),
//     util        : require('util')
// }
//
// global.onlineList = [];
//
// global.app = lib.http.createSever(function(req, res) {
//     res.render = function() {
//         var templete = arguments[0];
//         var options = arguments[1];
//         var str = lib.fs.readFileSync(templete, 'utf8');
//         var fn = lib.pug.compile(str, {filename: templete, pretty: true});
//         var page = fn(options);
//         res.writeHead(200, { 'Content-Type': 'text/html'});
//         res.end(page);
//     }
//     lib.router.router(res, req);
// }).listen(3000);
//
// global.io = lib.socket.listen(app);



var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
