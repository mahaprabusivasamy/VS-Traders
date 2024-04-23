const { MongoClient } = require('mongodb');

let db;

// Callback used to start server
function connectToDb(startServer) {
   
        .then(function (client) {
            db = client.db();
            return startServer();
        })
        .catch(function (error) {
            return startServer(error);
        });
}

function getDb() {
    return db;
}

module.exports = { connectToDb, getDb };
