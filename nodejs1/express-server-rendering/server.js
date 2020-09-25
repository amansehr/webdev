const express = require('express')
const app = express()
const todoroute = require('./route/todo')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'hbs')
app.use('/todos', todoroute)

app.listen(4444, () => {
    console.log("Server started at port : 4444")
})