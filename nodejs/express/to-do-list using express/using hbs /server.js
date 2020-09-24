const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs')

let task = []

app.get('/', (req, res) => {
    res.render('index', { task }) //! file should be inside views folder.
})


app.post('/', (req, res) => {
    task.push(req.body.li) //! it will push to an array
    res.redirect('/') //! this will redirect to root page
})
//! jabi bhi redirect use karta h toh http 302 code use hota {or koi ho sakta h check kar}and agar humara pass address h ki kha jana h huma .toh browser automatically get request karta h ush address per

app.listen(4444, () => {
    console.log("started at port 4444")
})