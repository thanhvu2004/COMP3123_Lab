var http = require('http');
//My Own Created Module
var dt = require('./myfirstmodule');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<br/>The date and time are currently: " + dt.myDateTime());
    res.write('<br/>Hello World!');
    res.write("<br/>" + req.url);
    //http://localhost:8088/?year=2017&month=July
    var q = url.parse(req.url, true).query;
  	var txt = q.year + " " + q.month;
  	res.write("<br/>" + txt);
    res.end();
}).listen(8088);