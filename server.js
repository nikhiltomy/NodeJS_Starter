var http = require('http');
var fs = require('fs');
var url = require('url')

http.createServer(function (req, res) {

    var q = url.parse(req.url,true);


    if (q.pathname === '/') {
        fs.readFile('sample.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data);
            res.end();
        })
    } else if (q.pathname === '/signup') {
        fs.readFile('signup.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data);
            res.end();
        })
    } else if (q.pathname === '/signupaction') {
        console.log(q);
        res.write('action');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write('404');
        res.end();
    }

}).listen(7000, () => {
    console.log("Server Running");
})
