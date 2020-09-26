const Seqeulize = require('sequelize')
const datatypes = Seqeulize.DataTypes
const db = new Seqeulize('samoledb1', 'myuser', 'mypass', {
    host: 'localhost',
    dialect: 'mysql'
})

//! This is a way to create model means table in sequelize
const student = db.define('student', {
    name: {
        type: datatypes.STRING(40),
        allowNull: false
    },
    age: {
        type: datatypes.INTEGER(2),
        allowNull: false,
        defaultValue: -1
    },
})
//! sync me alter : true dalna se table create hona ke baad hum table me defn change kar sakta h
//! force : true likha gha toh phele drop karde gha table fir create kar degha new changes ke sath
db.sync().then(() => console.log('Database sync'))
    .catch((err) => console.error(err))


module.exports = {
    db, student
}