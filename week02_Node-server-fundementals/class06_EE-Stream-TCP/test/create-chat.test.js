const assert = require('assert');
const createChat = require('../lib/create-chat');
const net = require('net');

describe.only('chat app server', () => {
    const port = 15688;

    let clients = null;
    let server = null;
    beforeEach(done => {
        clients = [];
        server = createChat();
        server.listen(port, done);
    });
    
    afterEach(() => {
        clients.forEach(client => client.destroy());
        server.close();
    });

    function openClient(callback) {
        let client = net.connect(port, () => {
            client.setEncoding('utf8');
            clients.push(client);
            callback(null, client);
        });
    }

    it('announces a client when they join', done => {
        openClient((err, client) => {
            client.once('data', data => {
                assert.equal(data, 'user1: has joined\n');
                done();
            });
        });
    });

    it('sends @all message to all users', done => {
        openClient((err, client1) => {
            openClient((err, client2) => {
                client2.on('data', data => {
                    assert.equal(data, [
                        'user2: has joined\n',
                        'user1: Hello world\n'
                    ].join(''));
                    done();
                });
                client1.write('@all Hello world');
            });
        });
    });

    it('changes username via @nick:newname', done => {
        openClient((err, client1) => {
            openClient((err, client2) => {
                client2.once('data', data => {
                    assert.equal(data, [
                        'user2: has joined\n',
                        'user1: changed name to cooluser\n',
                        'cooluser: Hello world\n'
                    ].join(''));
                    done();
                });
                client1.write('@nick:cooluser');
                client1.write('@all Hello world');
            });
        });
    });

    it('direct message does not broadcast', done => {
        openClient((err, client1) => {
            openClient((err, client2) => {
                openClient((err, client3) => {
                    
                    client2.on('data', data => {
                        if(data === 'user2: has joined\n') return;                        
                        assert.ok(!/sekrit/.test(data), 'should not received');
                    });

                    client3.on('data', data => {
                        assert.equal(data, [
                            'user3: has joined\n',
                            'user1: Hello sekrit\n'
                        ].join(''));
                        done();
                    });

                    client1.write('@dm:user3 Hello sekrit');
                });
            });
        }); 
    });

});