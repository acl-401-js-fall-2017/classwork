
function greet(name) {
    return `hello ${name}`;
}

it('greets with name', () => {
    const greeting = greet('meow-meow');
    if(greeting !== 'hello meow-meow') {
        throw new Error(`expected 'hello meow-meow', but got ${greeting}`);
    }
});