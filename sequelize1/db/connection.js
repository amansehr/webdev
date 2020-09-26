const seq = require('sequelize')
const db = new seq('samoledb1', 'myuser', 'mypass', {
    host: 'localhost',
    dialect: 'mysql'
})

db.authenticate().then(() => console.log('Connection Worked'))
    .catch((err) => console.error(err))

module.exports = {
    db
}

//Associations
