const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/public'))

function decypt(req, res, next) {
    let str = req.query.q
    req.query.q = str.replace(/([a-zA-Z])/g, function (match) {
        return String.fromCharCode(match.charCodeAt() ^ 32)
    })
    next()

}

function decode(req, res, next) {
    req.query.q = new Buffer(req.query.q, "base64").toString("ascii") //this a way to decode in nodejs js wala fn yha kam nhi kara gha
    next()
}

function resp(req, res, next) {
    let ans = eval(req.query.q) //this fn is used to exec js code inside it it return last line as ans
    res.send(`${ans}`)

}

app.get('/result', decypt, decode, resp)


app.listen(4444, () => {
    console.log('server started on port:4444')
})