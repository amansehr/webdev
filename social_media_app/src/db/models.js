const { Sequelize } = require('sequelize')
const seq = require('sequelize')
const db = new seq({
    dialect: 'mysql',
    database: 'cbsocialmediadb',
    username: 'myuser',
    password: 'mypass'
})

const Col_ID_DEF = {
    type: seq.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}

const COL_USERNAME_DEF = {
    type: seq.DataTypes.STRING(50),
    unique: true,
    allowNull: false
}

const COL_TITLE_DEF = {
    type: seq.DataTypes.STRING(140),
    allowNull: false
}
const users = db.define('user', {
    id: Col_ID_DEF,
    username: COL_USERNAME_DEF
})

const posts = db.define('post', {
    id: Col_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: seq.DataTypes.TEXT,
        allowNull: false
    }
})
const comments = db.define('comment', {
    id: Col_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: seq.DataTypes.TEXT('tiny')
    }
})


//! This is a way to define relation in sequelize 
users.hasMany(posts)
posts.belongsTo(users)

posts.hasMany(comments)
comments.belongsTo(posts)

users.hasMany(comments)
comments.belongsTo(users)


module.exports = {
    db, users, posts, comments
}