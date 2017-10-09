const assert = require('assert');

class ChatRoom {

    constructor() {
        this.clients = new Map();
        this.counter = 0;
    }

    addClient(client) {
        const username = client.username = `user${++this.counter}`;
        this.clients.set(username, client);
    }

    getClient(username) {
        return this.clients.get(username);
    }
}

describe('chat room', () => {

    let chat = null;
    let client = null;
    beforeEach(() => {
        chat = new ChatRoom();
        client = {};
    });

    it('adds a client, assigns username to client', () => {
        chat.addClient(client);
        assert.ok(client.username);
    });

    it('clients can be retrieved via username', () => {
        chat.addClient(client);
        const got = chat.getClient(client.username);
        assert.equal(got, client);
    });

    it('renames a client', () => {

    });
});