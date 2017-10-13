const mongodb = require('../mongodb');
const ObjectID = require('mongodb').ObjectID;
const notFound = require('../utils/not-found');
const errorHandler = require('../utils/error-handler');

const methods = {
    POST(req, res) {
        const crews = mongodb.db.collection('crews');
        crews.insert(req.body)
            .then(result => {
                const crew = result.ops[0];
                res.end(JSON.stringify(crew));
            })
            .catch(err => errorHandler(err, req, res));
    },
    GET(req, res) {
        const crews = mongodb.db.collection('crews');
        const id = req.requested.params.id;
        if(!id) {
            crews.find().toArray()
                .then(crews => {
                    res.end(JSON.stringify(crews));
                });
            return;
        }

        crews.findOne({ _id: ObjectID(id) })
            .then(crew => {
                if(!crew) {
                    res.statusCode = 404;
                    res.end(JSON.stringify({
                        error: `id ${id} does not exist`
                    }));
                    return;                    
                }
                res.end(JSON.stringify(crew));
            })
            .catch(err => errorHandler(err, req, res));

    },
    DELETE(req, res) {
        const id = req.requested.params.id;
        if(!id) {
            res.statusCode = 400;
            res.end(JSON.stringify({
                error: 'DELETE called without id'
            }));
            return;
        }

        const crews = mongodb.db.collection('crews');
        crews.removeOne({ _id: ObjectID(id) })
            .then(result => {
                const status = {
                    removed: result.deletedCount === 1
                };
                res.end(JSON.stringify(status));
            })
            .catch(err => errorHandler(err, req, res));
    }
};

module.exports = (req, res) => {
    res.setHeader('Content-Type', 'application/json'); 

    const subRoute = methods[req.method] || notFound;
    subRoute(req, res);
};