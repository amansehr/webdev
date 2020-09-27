const express = require('express')
const session = require('express-session')
const app = express()
const expresssession = require('express-session')

app.set('view engine', 'hbs')


app.use(expresssession({
    resave: false,  //!  save the cookie client <--> communication
    saveUninitialized: false, //! save cookie even if nothing to track
    secret: 'Some long random string here', //! used to encrypt the cookie,
    name: 'myawescookie'
}))
//! set-cookie header is used to send cookie from server to browser by http response header and browser saves it automatically
//! cookie header is used by http request to send cookie to server with the request

app.get('/', (req, res) => {

    //! Used to track details in session
    console.log(req.session)

    //! Agar ek session ko baar baar khola gha toh visit inc hoga or agar naya session khola gha toh 0 se start hoka increment hoga
    if (!req.session.visits) req.session.visits = 1
    else req.session.visits++

    res.render('index', { count: (req.session.visits) })
})

app.listen(4444, () => {
    console.log("Server started at port : 4444")
})