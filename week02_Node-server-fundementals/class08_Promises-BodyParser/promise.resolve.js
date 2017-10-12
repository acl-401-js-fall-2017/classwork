const promise = Promise.resolve(42);
console.log('A');
promise.then(value => console.log(value));
console.log('B');