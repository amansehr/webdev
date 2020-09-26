const { DataTypes, Model } = require('sequelize')
const { db } = require('./connection')

const course = db.define('course', {
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true,
    },

    name: DataTypes.STRING(20),
})
const teacher = db.define('teacher', {
    name: {
        type: DataTypes.STRING(20),
        allowNull: true
    }
})

const center = db.define('center', {
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
})

const season = db.define('season', {
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: true
    }
})

const Batch = db.define('batch', {
    code: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    year: DataTypes.INTEGER(4),
    start: DataTypes.DATE,
    end: DataTypes.DATE

})

//! Associations 

Batch.belongsTo(course)
Batch.belongsTo(center)
Batch.belongsTo(season)

course.hasMany(Batch)
center.hasMany(Batch)
season.hasMany(Batch)

db.sync()

module.exports = {
    Batch, center, season, course, teacher, db
}