const fs = require('fs');

const cache = {};
function someAsync(file, callback) {
    if(cache[file]) return setTimeout(() => {
       callback(null, cache[file]);
    });

    fs.readFile(file, 'utf8', (err, data) => {
        if(err) return callback(err);
        cache[file] = data;
        callback(null, cache[file]);
    });
}


console.log('A');

someAsync('zalgo.js', (err, file) => {
    console.log('C');

    someAsync('zalgo.js', (err, file) => {
        console.log('E');
    });
    
    console.log('D');
});

console.log('B');

