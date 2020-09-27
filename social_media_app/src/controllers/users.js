const { users } = require('../db/models')
const { genrandomusername } = require('../utils/username')
async function createAnonuser() {
    const user = await users.create({
        username: genrandomusername()
    })

    return user
}

module.exports = {
    createAnonuser
}