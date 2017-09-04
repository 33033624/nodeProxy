var http = require('http');
var url=require('url');
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var content = '';
    var opt = {
         host:'youpin.m.58.com',
         port:'80',
         method: request.method,
         path:pathname
    };
    var req = http.request(opt, function(res) {
        res.on('data',function(body){
            console.log('return');
            content+=body;
        }).on("end", function () {
          console.log(content);
            response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
            response.write(content);
            response.end();
        });
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
    req.end();
}).listen(800);//监听端口80,将80端口的请求转发到news.163.com
console.log("Server runing at port: " + 80 + ".");
