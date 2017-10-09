const net = require('net');

const server = net.createServer(client => {
    client.setEncoding('utf8');

    client.write('welcome to my tcp server\n');

    client.on('data', message => {
        process.stdout.write(message);
    });

    // we could also just do:
    // client.pipe(process.stdout);
});

server.listen(15678, () => console.log('tcp server started'));