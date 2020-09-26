const { db, center, season, Batch, course, teacher } = require('./model')

const seed = async () => {
    try {
        db.sync({ alter: true })


        //! It is used to seed tables with intial values
        await center.bulkCreate([
            { id: 'pp', name: 'pitampura', city: 'New Delhi' },
            { id: 'dw', name: 'dwarka', city: 'New Delhi' },
            { id: 'no', name: 'noida', city: 'New Delhi' },
            { id: 'dd', name: 'Dehradun', city: 'Dehradun' },
            { id: 'ol', name: 'online', city: 'New Delhi' },
        ], {
            ignoreDuplicates: true
        })

        await season.bulkCreate([
            { id: 's', name: 'summer' },
            { id: 'f', name: 'winter' },
            { id: 'w', name: 'fall' },
            { id: 'p', name: 'spring' },
        ], {
            ignoreDuplicates: true
        })

        await course.bulkCreate([
            { id: 'LP', name: 'Launchpad' },
            { id: 'cx', name: 'crux' },
            { id: 'ib', name: 'interview Bootcamp' },
            { id: 'wd', name: 'webdev nodejs' },
        ], {
            ignoreDuplicates: true
        })
    }
    catch (e) {
        console.error(e)
    }
}
seed()