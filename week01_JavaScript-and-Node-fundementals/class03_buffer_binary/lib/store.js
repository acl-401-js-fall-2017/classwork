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
        const found = this.data.find(item => item._id === id);
        return found || null;
    }

    remove(id) {
        const index = this.data.findIndex(item => item._id === id);
        if(index === -1) return { removed: false };
        this.data.splice(index, 1);
        return { removed: true };
    }
};