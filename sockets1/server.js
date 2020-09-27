const express = require('express')
const app = express()
const http = require('http')
const socketio = require('socket.io')

const server = http.createServer(app)
const io = socketio(server)
//! it start the socket.io on http server
//! and create new route  /socket.io/socket.io.js. To send client side lib to the client so that client can easily access the client side script
//! socket.io need both server and client side functionality

//! if we want to apply some http logic we use app variable and if we want to apply some socket logic we do via server variable

app.use('/', express.static(__dirname + '/public'))

//! ws - web socket interface is used to send data in real time 
//! every time new conn is established do call this fn
//! Every time a new conn is established new copy is made which contain socket object.Asha hi socket client side me bana gha per conn ke liya.
//! socket.id is base64 encoding has 20 character which will be randomly generated
io.on('connection', (socket) => {
    console.log('connection', socket.id)
})




server.listen(4444, () => {
    console.log("Server has started on port:4444")
})