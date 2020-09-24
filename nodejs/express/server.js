const express = require('express')
console.log(typeof express) //! function

const app = express()

// app.get('/', (req, res) => {
//     //! res.send('hello World')
//     //!  res.send('<h1>Hello World</h1>')
//     res.send('<h1 style="color:red;">Hello World</h1>')
// })
// //* req = request
// //* res = response

//  app.get('/newworld', (req, res) => {
//     //  console.log(req.url) //! it has requested url
//     //console.log(req.headers)
//     console.log(req.query)
//    // console.log(req)
//   res.send('hello World')
//  })

// app.get('/newworld', (req, res) => {
//     let person = 'Guest'
//     if (req.query.person) person = req.query.person
//     res.send(`<h1>Hello ${person}</h1>`)
// })




app.listen(4444, () => {
    console.log('server started on http://localhost:4444')
})