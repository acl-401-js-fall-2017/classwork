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

server.listen(8080, () => console.log('server started'));