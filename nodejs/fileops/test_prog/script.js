const fs = require('fs')

fs.readFile(__dirname + '/input.txt', (err, data) => {
    if (err) throw err
    let a = data.toString().split('\n')
    a.pop()
    let res = a.reduce((acc, curr) => {
        if (curr in acc) {
            acc[curr]++
        }
        else {
            acc[curr] = 1
        }
        return acc
    }, {})

    console.log(res)
})

