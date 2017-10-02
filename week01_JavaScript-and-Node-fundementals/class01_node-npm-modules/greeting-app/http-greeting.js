// require the http module so we can run an http server
const http = require('http');
// get our greet function
const greet = require('./lib/greet');

// create a server that responds with greeting
const server = http.createServer((req, res) => {
    res.end(greet(req.url));
});

// "starts" the server on port 3000;
server.listen(3000, () => {
    console.log('listening on port', 3000);
});