const seq = require('sequelize')
const db = new seq('shopdb', 'myuser', 'mypass', {
    host: 'localhost',
    dialect: 'mysql'
})
const datatypes = seq.DataTypes
// try {
//     await db.authenticate();
//     console.log("connect successfully")
// } catch (err) {
//     console.error(err)
// }
//! pe bhi shi h

db.authenticate().then(() => console.log('Connection Worked'))
    .catch((err) => console.error(err))



const user = db.define('users', {
    name: {
        type: datatypes.STRING,
        allowNull: false
    }
})
const product = db.define('products', {
    name: {
        type: datatypes.STRING,
        allowNull: false

    },
    manufacturer: datatypes.STRING,
    price: {
        type: datatypes.FLOAT,
        allowNull: false,
        default: 0.0
    }
})
db.sync().then(() => {
    console.log('Database has been synced')
}).catch((err) => {
    console.error("Error creating database")
})

module.exports = {
    user, product
}
