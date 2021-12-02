const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 8080

function serveStaticFile(res, path, contentType, responseCode = 200) {
    // readFile 같은경우 비동기적으로 읽는 메서드이다. 이 메서드는 콜백이라 부르는 패턴을 사용한다 함수를 호출할 때 콜백 함수를 전달하면, 함수가 실행을 마쳤을 때 콜백함수가 호출된다  
    fs.readFile(__dirname + path, (err, data) => {
        if(err) {
            res.writeHead(500, {'Content-Type': 'text/plain'})
            return res.end('500 - Internal Error')
        }
        res.writeHead(responseCode, {'Content-Type': contentType})
        res.end(data)
    })
}

const server = http.createServer((req, res) => {
    // 쿼리스트링, 옵션인 마지막 슬레시를 없애고 소문잘 바꿔서 url을 정규화한다.
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch (path) {
        case '':
            serveStaticFile(res, '/public/home.html', 'text/html')
            break
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html')
            break
        case '/img/logo.png':
            serveStaticFile(res, '/public/img/logo.png', 'image/png')
        default:
            serveStaticFile(res, '/public/404.html', 'text/html')
            break;
    }
})

server.listen(port, () => console.log(`server started on port ${port} ` + 'press Ctrl-C to terminate....'))