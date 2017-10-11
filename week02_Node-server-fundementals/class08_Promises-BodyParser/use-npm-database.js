const Db = require('acl-fall-simple-database');
const join = require('path').join;

const db = new Db(join(__dirname, 'data'));

db.getStore('fruits')
    .then(store => {
        return store.save({ name: 'banana', tasty: 8 })
            .then(() => {
                return store.getAll();
            })
            .then(fruits => {
                // eslint-disable-next-line
                console.log(fruits);
            });
    });