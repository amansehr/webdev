let socket = io()

socket.on('connect', () => {
    document.getElementById('socketid').innerText = socket.id
})