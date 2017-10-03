

function changeName(changeMe) {
    changeMe.name = 'meow-meow';
}

var person = {
    name: 'woof-woof'
};
changeName(person);
console.log(person);
