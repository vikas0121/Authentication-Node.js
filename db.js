var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/users";

module.exports = (data) => {
    console.log('message received');

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.collection('users').insertOne(data, function (err, res) {
            if (err) {
                console.log('Error occured in inserting document.')
                throw err;
            }
            console.log("document inserted");
            db.close();
        });
    });
};