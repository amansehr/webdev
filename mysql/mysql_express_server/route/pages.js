const route = require('express').Router()
const db = require('../db')



route.get('/', (req, res) => {

    db.getallpersons().then((persons) => {
        res.render('person', { persons })
    }).catch((err) => {
        res.send(err)
    })


})

route.route('/add')
    .get((req, res) => {
        res.render('person_add')
    })
    .post((req, res) => {
        db.addnewperson(req.body.name, req.body.age, req.body.city).then(() => {
            res.redirect('/pages/')
        }).catch((err) => {
            res.send(err)
        })
    })

module.exports = {
    route
}