const obj1 = { name: 'foo' };
const obj2 = { name: 'foo' };
const obj3 = obj1;

obj1.name = 'bar';

console.log('same object? obj2', obj1 === obj2);
console.log('same object? obj3', obj1 === obj3);
