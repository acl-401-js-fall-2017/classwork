const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('hello world');
// });

const server = new http.Server();

server.on('request', (req, res) => {
    res.write('<p>hello</p>');
    res.write('<li>bullet</li>')
    res.end();
});

server.listen(8080, () => console.log('server started'));const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('foo', () => console.log('foo was emitted'));
ee.on('bar', () => console.log('bar was emitted'));
ee.once('qux', () => console.log('qux was emitted'));

ee.emit('foo');
ee.emit('foo');
ee.emit('bar');
ee.emit('bar');
ee.emit('qux');
ee.emit('qux');