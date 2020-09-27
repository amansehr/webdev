const http = require('http')
const express = require('express')
const app = express()
const socketio = require('socket.io')

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
    console.log("connect with socket id : ", socket.id)
    socket.on('boom', () => { //! Means when boom event happen do this thing
        console.log('Boom Received from ', socket.id)
        socket.emit('whizz')
    })
    //! Send event from server to client 

})
app.use('/', express.static(__dirname + '/public'))

server.listen(4444, () => {
    console.log("Server started on port:4444")
})
