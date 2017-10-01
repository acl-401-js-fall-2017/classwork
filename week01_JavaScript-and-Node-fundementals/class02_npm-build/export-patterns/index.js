// const cars = require('object-literal');
// const museums = require('object-literal');

// const createStore = require('object-literal-factory');
// const carStore = createStore();
// const museumStore = createStore();

const Store = require('class');

const store = new Store();

const cat = { type: 'cat', name: 'felix' };
const dog = { type: 'dog', name: 'fido' };
const scruffy = { type: 'dog', name: 'scruffy' };

store.save(cat);
store.save(dog);
store.save(scruffy);

const animals = store.getAll();

console.log(animals);

// [ 
//     { _id: '1dd23', type: 'cat', name: 'felix' },
//     { _id: '45fd5', type: 'dog', name: 'fido' }
//     { _id: 'e3ec3', type: 'dog', name: 'scruffy' }
// ]

console.log(store.get('e3ec3'));

// { _id: 'e3ec3', type: 'dog', name: 'scruffy' }

store.remove('e3ec3');

console.log(animals);

// [ 
//     { _id: '1dd23', type: 'cat', name: 'felix' },
//     { _id: '45fd5', type: 'dog', name: 'fido' }
// ]

// DON'T ACCESS THE INTERNAL STATE!!!
// store.list