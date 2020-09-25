const express = require('express')
const app = express()
const todoroute = require('./route/todo')

app.use(express.json()) //! to parse json data
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(__dirname + '/public'))
app.use('/todos', todoroute) //! to set route


app.listen(4444, () => {
    console.log("server has started at port:4444")
})