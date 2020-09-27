const { MongoClient } = require('mongodb');
const mongo_url = 'mongodb://localhost:27017';
const db_name = 'tododb';

async function readtask() {
    const client = await MongoClient.connect(mongo_url)
    const tododb = client.db(db_name)
    const todos = tododb.collection('todos')

    //! todos.find({}) will give cursor so that pura ka pura load na karna padha 
    //! todos.find({}).batchSize(no) can be used to set batch size ki ek baar me kitna read karna h
    //const todoarr = await todos.find({}).toArray()
    //const todoarr = await todos.find({ priority: 1 }).toArray()
    //const todoarr = await todos.find({ priority: { $gt: 1 } }).toArray()
    //  const todoarr = await todos.find({ owner: "ceo" }).toArray()
    const todoarr = await todos.find({ priority: { $exists: false } }).toArray()
    //! Read about more operator on mongodb documentation
    todoarr.forEach((todo, idx) => console.log(idx + ":  " + JSON.stringify(todo)))
    //! first arg --> value ke liya
    //! second arg --> index ke liya
}

readtask()