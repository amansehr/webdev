const { MongoClient } = require('mongodb');
const mongo_url = 'mongodb://localhost:27017';
const db_name = 'tododb';

async function writetask() {
    const client = await MongoClient.connect(mongo_url)
    const tododb = client.db(db_name) //! way to create or get access to database if created
    const todos = tododb.collection('todos') //! way to create table inside tododb 

    // const todo = {
    //     task: 'an imp task',
    //     priority: 2,
    //     owner: 'manager'
    // }
    //! This is a way to insert data in table
    //  const done = await todos.insertOne(todo) //! it return a promise

    // const done = await todos.insertMany([
    //     { task: 'Simple Task', priority: 4, owner: 'security' },
    //     { task: 'complicated task', priority: 1, owner: 'ceo' },
    //     { task: 'some admin Task', priority: 3, owner: 'manager' },
    //     { task: 'extra Task', priority: 2, owner: 'executive' }
    // ])

    //* we can write without priority and owner ,matlab kasha bhi data add kar sakta h
    const done = await todos.insertMany([
        { task: 'Another Task', priority: 3 },
        { task: 'more tasks', priority: 2 },
        { task: 'A task that will be done later ', priority: 1 },
        { task: 'bonus Task', priority: 4 }
    ])

    console.log(done)
}
writetask()