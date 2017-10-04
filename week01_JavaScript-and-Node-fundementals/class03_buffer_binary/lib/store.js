const shortid = require('shortid');

module.exports = class Store {

    constructor() {
        this.data = [];
    }

    save(item) {
        item._id = shortid.generate();
        this.data.push(item);
        return item;
    }

    get(id) {
        return this.data.find(item => item._id === id);
    }
};