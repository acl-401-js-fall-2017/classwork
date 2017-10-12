const fs = require('fs');

const cache = {};
function someAsync(file) {

    if(cache[file]) return cache[file];

    const promise = cache[file] = new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if(err) return reject(err);
            resolve(data);
        });
    });

    return promise;
};


console.log('A');

someAsync('zalgo.js')
    .then(file => {
        console.log('C');
        return someAsync('zalgo.js');
    })
    .then(file => {
        console.log('D');
    });
console.log('B');

