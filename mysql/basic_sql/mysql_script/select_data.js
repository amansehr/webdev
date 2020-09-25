const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password: 'mypass'
})

//! fields = cols == > this contain details info abt col  , results = rows ==> it stores the data of row
connection.query(`select * from persons`, (err, results, fields) => {

    if (err) { console.error(err) }
    else {
        console.log(results)
        console.log(fields)
    }
    connection.close()
})