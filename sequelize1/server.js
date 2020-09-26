const { json } = require('body-parser')
const express = require('express')
const app = express()
const { center, season, course, Batch } = require('./db/model')
app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/makebatch', async (req, res) => {
    try {
        const centers = await center.findAll()
        const seasons = await season.findAll()
        const courses = await course.findAll()
        const year = [2016, 2017, 2018, 2019, 2020, 2021]
        res.render('index', {
            centers, seasons, courses, year
        })
    }
    catch (e) {
        console.error(e)
    }
})
app.post('/makebatch', async (req, res) => {
    try {
        let batchcode = ''
        batchcode += req.body.course
        batchcode += req.body.center
        batchcode += req.body.year.substr(2)
        batchcode += req.body.season
        batchcode += req.body.batchno

        const result = await Batch.create({
            code: batchcode,
            year: req.body.year,
            courseId: req.body.course,
            centerId: req.body.center,
            seasonId: req.body.season,
            start: Date.parse(req.body.start),
            end: Date.parse(req.body.end)
        })
        res.send(result.code)
        // res.send(batchcode)
    }
    catch (e) {
        console.error(e)
    }
})

app.get('/batches', async (req, res) => {
    try {
        const batches = await Batch.findAll({
            //! way to make a join
            include: [course, season, center]
        })

        //! uncomment agar samaj na aaye toh
        // batches.forEach(element => {
        //     console.log(JSON.stringify(element))
        // });
        res.render('batchcode', { batches })
    }
    catch (e) {
        console.error(e)
    }
})
module.exports = {
    app
}