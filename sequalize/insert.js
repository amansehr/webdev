const { db, student } = require('./model')

const task = async () => {
    try {
        //  await db.sync({ alter: true })
        await db.sync()
        //insert a student
        //! we can also use promises
        // await student.create({
        //     name: 'Some Person',
        //     age: 20
        // })

        await student.create({
            name: (['tom', 'dick', 'harry'])[parseInt(Math.random() * 10)],
            age: 10 + parseInt(Math.random() * 10)
        })
    } catch (e) {
        console.error(e)
    }
}

task()