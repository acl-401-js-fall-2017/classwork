const MongoClient = require('mongodb').MongoClient;

module.exports = {
    db: null,
    connect(url) {
        return MongoClient.connect(url)
            .then(db => {
                this.db = db;
                return db;
            });
    }
};