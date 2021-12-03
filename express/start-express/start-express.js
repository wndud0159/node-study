const fortune = require('./lib/fortune')
const handlers = require('./lib/handler')

const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

// set handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

const port = process.env.PORT || 8080



app.use(express.static(__dirname + '/public'))

// 템플릿 사용안했을경우
// app.get('/', (req, res) => {
//     res.type('text/plain')
//     res.send('home page')
// })

// app.get('/about', (req, res) => {
//     res.type('text/plain')
//     res.send('about page')
// })

// // custom 404 page
// app.use((req, res) => {
//     res.type('text/plain')
//     res.status(404)
//     res.send('404 - Not Found')
// })

// // custom 500 page
// app.use((err, req, res, next) => {
//     console.log(err.message)
//     res.type('text/plain')
//     res.status(500)
//     res.send('500 - Server Error')
// })

// 핸들바 사용 경우
app.get('/', handlers.home)

app.get('/about', handlers.about)

// custom 404 page
app.use(handlers.notFound)

// custom 500 page
app.use(handlers.serverError)

app.listen(port, () => console.log(`Express started on http://localhost:${port}`))
