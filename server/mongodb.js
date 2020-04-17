const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'gmt-converter'

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!');
    }
    console.log('connected! ');
    const db = client.db(databaseName);

    db.collection('time-zones').insertOne({
        name:'Asia/Karachi',
    },(error, result) => {
        if(error) {
            return console.log('Unable to insert!')
        }
    })

})
