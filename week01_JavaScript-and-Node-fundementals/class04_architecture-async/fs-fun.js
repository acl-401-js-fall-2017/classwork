const fs = require('fs');

// fs.readdir('bad', (err, files) => {
//     console.log(err, files);
// });

// fs.writeFile('foo.txt', 'i am data in a file', (err, data) => {
//     console.log(err, data);
// });

// fs.unlink('foo.txt', (err, data) => {
//     console.log(err, data);
// });

fs.readFile('foo.txt', { encoding: 'utf8' }, (err, data) => {
    console.log(data);
});