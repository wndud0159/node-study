const http = require('http')
const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    // 쿼리스트링, 옵션인 마지막 슬레시를 없애고 소문잘 바꿔서 url을 정규화한다.
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    
    switch(path) {
        case '':
            res.writeHead(200, {'Content-Type': 'text/plain'})
            // html 대신 평문을 보낸다
            res.end('Homepage')
            break
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('Aboutpage')
            break
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end('Not Found')
            break
    }
})

server.listen(port, () => console.log(`server started on port ${port}; `+ `press Ctrl-C terminate....`))