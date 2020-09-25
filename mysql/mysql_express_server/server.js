const express = require('express')
const app = express()
const pagesroute = require('./route/pages.js')
const apiroute = require('./route/api.js')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "hbs")

app.use('/pages', pagesroute.route)
app.use('/api', apiroute.route)
app.use('/', express.static(path.join(__dirname, 'public'))) //another of mounting path

app.listen(4444, () => {
    console.log('Server started on http://localhost:4444')
})