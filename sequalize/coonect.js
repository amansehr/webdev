const Seqeulize = require('sequelize')
const datatypes = Seqeulize.DataTypes
const db = new Seqeulize('samoledb1', 'myuser', 'mypass', {
    host: 'localhost',
    dialect: 'mysql'
})


//! it is used to check whether we are able to connect to database or not
db.authenticate()
    .then(() => console.log('Connection Worked'))
    .catch((err) => console.error(err))
