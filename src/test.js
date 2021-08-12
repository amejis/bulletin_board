
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const assert = require('assert')

MongoClient.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false&useUnifiedTopology=true', (err, db) => {
    assert.equal(null, err)
    console.log("Connected successfully to server")
    db.close()
})