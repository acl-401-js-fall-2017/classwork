const fs = require('fs');
// const promisify = require('util').promisify;
// const readFile = promisify(fs.readFile);
// fs.readFile('callback-2-promises.js', 'utf-8', (err, file) => {
//     if(err) return console.log(err);
//     console.log(file.slice(0, 55));
// });

function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms)
    });
}

function readFile(filename, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if(err) reject(err);
            else resolve(data);
        });
    });
}

readFile('foo.txt', 'utf-8')
    .then(contentsOfFoo => {
        return readFile(contentsOfFoo, 'utf-8')
    })
    .then(contentsOfBar => {
        console.log(contentsOfBar);
        return 42;
    })
    .then(number => {
        console.log('NUMBER:', number);
    })
    .catch(err => console.log('ERROR:', err));