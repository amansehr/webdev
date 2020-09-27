const express = require('express')
const app = express()
const { db } = require('./db/models')

db.sync()
    .then(() => {
        app.listen(4444, () => {
            console.log("Server started at port:4444")
        })
    }).catch((err) => {
        console.error(new Error('Could not start database'))
        console.error(err)
    })