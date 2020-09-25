const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

//! this is to mount /public folder in path of /abc.All the files inside /public can be acessed through the /abc/filename 
//! Agar iss folder me index.html h toh vo load hoga jasha yha kiya h

// app.get('/abc', (req, res) => {   //! ---------> 1
//     res.send('Hello abc')
// })

app.use('/abc', express.static(__dirname + '/public')) //! -----------> 2

//! agar humna 1 and 2  ko define kiya h toh dono me se jisha syntax phele hoga wahi request serve karra gha http://localhost:4444/abc
//! ye wali aage ka mounted path can be acessed normally bas issh path me hi index.html yha get request wali me se ho phele likha hoga wahi chala gha

app.listen(4444, () => {
    console.log("Server has started at port :4444")
})