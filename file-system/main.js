var http = require('http')
var fs = require('fs')

var app = http.createServer(function (req, res) {
    var url = req.url
    if (url == '/') {
        url = '/index.html'
    }
    if (url == '/favicon.ico') {
        return res.writeHead(404)
    }
    res.writeHead(200)
    console.log(__dirname + url)
    res.end(fs.readFileSync(__dirname + url))
})
app.listen(8080)