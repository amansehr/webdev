const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypass',
    database: 'mytestdb'
})

function getallpersons() {
    return new Promise((resolve, reject) => {
        connection.query(
            `select * from persons`,
            (err, row, col) => {
                if (err) reject(err)
                else resolve(row)
            }
        )
    })
}

function addnewperson(name, age, city) {
    return new Promise((resolve, reject) => {
        connection.query(
            //! This can cause sql injection
            // `insert into persons(name,age,city) values(
            //     '${name}','${age}','${city}'
            // )`,
            `insert into persons(name,age,city) values(?,?,?)`, [name, age, city],
            (err, result) => {
                if (err) reject(err)
                else resolve()
            })
    })
}

module.exports = {
    getallpersons, addnewperson
}