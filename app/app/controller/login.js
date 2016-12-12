module.exports = function() {
    var _res = arguments[0];
    var _req = arguments[1];

    this.checkSessin = function(model) {
        if (model == 'Login') {
            return true;
        } else if (sessionLib.username && sessionLib.username != ''){
            return true;
        }
        return false;
    }

    this.login = function() {
        lib.httpParam.POST('username', function(value) {
            sessionLib.username = value;

            if (value == 'dan') {
                _res.render(VIEW + 'live.pug', {'user': value});
            } else {
                _res.render(VIEW + 'main.pug', {'user': value})
            }
        })
    }
}
