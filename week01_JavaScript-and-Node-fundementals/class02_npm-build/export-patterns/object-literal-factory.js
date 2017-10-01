// Don't put instance state here!
// It would be shared be all stores!
// const list = [];

// revealing module pattern:

module.exports = function createStore() {
    const list = [];
    const dictionary = {};

    const store = {
        get(id) {},
        getAll() {},
        save(object) {},
        remove(id) {}
    };

    return store;
};
