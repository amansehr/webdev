const { MongoClient } = require('mongodb');
const mongo_url = 'mongodb://localhost:27017';
const db_name = 'tododb';
//! ASYNC LIFE
(async () => {
    const client = await MongoClient.connect(mongo_url)
    const todos = client.db(db_name)

    console.log(todos)
})()

