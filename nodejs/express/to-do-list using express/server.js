const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

let task = []

app.get('/', (req, res) => {
    let tasklist = task.map((t) => {
        return `<li>${t}</li>`
    }).join('\n')

    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>To Do List</title>
        
    </head>
    
    <body>
        <form action="/" method = "post">
            <input type="text" name="li">
            <button type="submit">ADD</button>
            <ul>
                ${tasklist}
            </ul>
        </form>
    </body>
    
    </html>`)
})


app.post('/', (req, res) => {
    task.push(req.body.li)
    res.redirect('/')
})


app.listen(4444, () => {
    console.log("started at port 4444")
})