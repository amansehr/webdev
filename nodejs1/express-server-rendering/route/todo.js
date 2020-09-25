const route = require('express').Router()

let task = []

route.get('/', (req, res) => {
    res.render('todos', { task })
})

route.post('/', (req, res) => {
    task.push({ task: req.body.task })
    res.redirect('/todos')
})

module.exports = route