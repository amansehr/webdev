const fs = require('fs')

fs.writeFile(__dirname + '/myfile.txt', "some data", (err) => {
    if (err) throw err

    console.log("file was written")
})

// *  __dirname == point to the folder jisma program h 
//! agar hum asha na likha toh vo parent dir me file bana de gha