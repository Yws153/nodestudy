var request = require('request');

request.post('http://127.0.0.1:1337', {form: {'name': 'aaaa', 'book': 'node'}}, function(error, response, result) {
    console.log(result);
});
