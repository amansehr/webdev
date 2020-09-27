let socket = io()

let boombtn = document.getElementById('boom')
boombtn.onclick = function () {
    socket.emit('boom') //! sending event from client to server
}

socket.on('whizz', () => {
    let h1 = document.createElement('h1')
    h1.innerText = 'whizz'
    document.body.appendChild(h1)
})