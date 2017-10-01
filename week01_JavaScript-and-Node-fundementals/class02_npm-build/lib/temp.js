
function reduce(array, callback, initialValue) {
    for(let i = 0; i < array.length; i++) {
        initialValue = callback(initialValue, array[i]);
    }
    return initialValue;
}


    it('reduce', () => {
        const array = [1, 2, 3];
        const sum = reduce(array, (total, x) => total + x, 0);
        assert.equal(sum, 6);
    });