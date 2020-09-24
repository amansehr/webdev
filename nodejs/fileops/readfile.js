const fs = require('fs')
fs.readFile(__dirname + '/myfile.txt', (err, data) => {
    if (err) throw err
    console.log(data.toString())
})

//! Read and write both async fn islye we have to write callback function