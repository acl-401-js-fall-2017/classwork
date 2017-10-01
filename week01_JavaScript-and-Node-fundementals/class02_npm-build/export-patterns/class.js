
class Store {
    constructor() {
        this.list = [];
    }

    get(id) {

    }

    getAll() {
        // don't give the caller the store's array!
        return this.list.slice();
    }

    save(object) {

    }
    
    remove(id) {

    }
}

// function Store(foo) {
//     this.foo = foo;
// }

// Store.prototype.get = function(id) {};


module.exports = Store;
