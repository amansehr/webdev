const route = require('express').Router()
const db = require('../db')

route.get('/', (req, res) => {
    db.getallpersons().then((persons) => {
        console.log(persons)
        console.log(typeof persons)
        res.send(persons)
    })
        .catch((err) => res.send(err))
})
route.post('/', (req, res) => {
    //! Adding to database
    db.addnewperson(req.body.name, req.body.age, req.body.city).then(() => {
        res.redirect('/api/')
    }).catch((err) => {
        res.send(err)
    })
})


module.exports = {
    route
}