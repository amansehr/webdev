const express = require('express')
const app = express()

function middleware(req, res, next) {
    console.log('passed to middleware1')
    next()
    console.log('passed to middleware1')
}

function middleware1(req, res, next) {
    res.send('<b>Hello World</b>')
}

app.get('/', middleware, middleware1)

app.listen(4444, () => {
    console.log('server has started at port : 4444')
})