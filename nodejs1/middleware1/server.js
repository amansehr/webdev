const express = require('express')
const app = express()

function m1(req, res, next) {
    console.log('pre middleware 1')
    next()
    console.log('post middleware 1')
}

function m2(req, res, next) {
    console.log('pre middleware 2')
    next()
    console.log('post middleware 2')
}

function m3(req, res, next) {
    console.log('pre middleware 3')
    next()
    console.log('post middleware 3')
}

app.get('/hello', m1, m2, m3, (req, res) => {
    console.log('pre send')
    res.send('hello world')
    console.log('post send')
})

app.listen(4444, () => {
    console.log("server started at port : 4444")
})