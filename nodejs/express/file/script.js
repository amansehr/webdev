const { urlencoded } = require('body-parser')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
//* it is a middleware means this fn will be executed on the request before any another function get executed
//! it will parse the body of request if it of urlencoded type .there are another way also in which body of request can be parsed.
//! like file,json data etc.
//! but here we are using urlencoded 

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html') //todo Agar koi or dir me h file toh uska hisab se location set kar
})
app.get('/greet', (req, res) => {
    res.send(`<h1>Hello ${req.query.person}</h1>`)
})


//! URL Path params --  ":something" is called url path params 
//! Agar hum dono function ek sath chalaye gha toh ye upar wala hi execute kara gha kuki done me same type ke url path params h toh uska lagha gha ki ye hi execute karna h
//! localhost:4444/:x/:y...... 

//* app.get('/:city/:greeting', (req, res) => {
//*     res.send(`<h1> ${req.params.greeting} to  ${req.params.city}`)
//* })

app.get('/:person/:age', (req, res) => {
    res.send(`<h1> ${req.params.person} age is ${req.params.age}`)
})


app.post('/greet', (req, res) => {
    console.log(req.body) //* check the output it will give you the data of request
    res.send(`<h1>Hello ${req.body.person}</h1>`)
})



app.listen(4444, () => {
    console.log("Server started on http://localhost:4444")
})
