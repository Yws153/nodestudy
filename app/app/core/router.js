var Login = require(CON + 'login');

exports.router = function(res, req) {
    var pathname = decodeURI(lib.url.parse(req.url).pathname); // 解析编码后的url字符
    lib.httpParam.init(req, res); // 初始化HTTP的GET和POST参数获取的对象
    global.sessionLib = lib.session.start(res, req);
    var model = pathname.substr(1)
    var controller = lib.httpParam.GET('c')
    var Class = ''

    if (pathname == './favicon.ico') {
        res.render(VIEW + 'index.pug');
        return
    }

    try {
        Class = require(CON + model)  // try require一个请求的类
    } catch (err) {
        lib.staticModule.getStaticFile(pathname, res, req, BASE_DIR);
        return;
    }

    if (Class) {
        var login = new login(res, req);
        var ret = login.checkSessin(model);
        if (ret) {
            var object = new Class(res, req);
            object[controller].call();
        } else {
            res.render(VIEW + 'index.pug')
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain'});
        res.end('can not find source')
    }
}
