const mysql = require('mysql2')

const insert = {
    name: process.argv[2],
    age: parseInt(process.argv[3]),
    city: process.argv[4]
}
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password: 'mypass'
})


connection.query(`
    insert into persons(name,age,city) values (
        '${insert.name}',
        '${insert.age}',
        '${insert.city}'
    )
`, (err, results) => {
    if (err) { console.error(err) }
    else {
        console.log(results)
        console.log("inserted successfully")
    }
    connection.close()
})