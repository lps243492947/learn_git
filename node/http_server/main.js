// require 关键字 引入一个模块，COMMONJS
const http = require('http');
let i = 0;
http
    .createServer(function(request, response){
        response.end(`Hello World!${++i}`);
    })
    .listen(3000);
