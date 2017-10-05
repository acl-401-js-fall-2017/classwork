const fs = require('fs');
const http = require('http');
const request = require('superagent');

console.log('A - Start of file');

fs.readFileSync('foo.txt');

console.log('A.1/2 - after readFileSync');


[1, 4, 6].forEach(n => console.log(n));

fs.readFile('~/big.pdf', 'utf8', (err, data) => {
    console.log('B - big.pdf callback');
});

fs.readFile('./event-loop.js', 'utf8', (err, data) => {
    console.log('C - event-loop.js callback');
});

http.createServer((req, res) => {
    console.log('D - web server callback');
    res.end();
}).listen(8080);

setTimeout(() => {
    console.log('E - setTimeout 1000 callback');
}, 1000);

request.get('www.google.com').end((err, res) => {
    console.log('F - get google callback');
});

console.log('G - End of file');
