const { db } = require('./db/model')
const { app } = require('./server')

const start = async () => {
    try {
        await db.sync()

        app.listen(4444, () => {
            console.log('server startd at port :4444')
        })
    }
    catch (e) {
        console.error(e)
    }
}

start()