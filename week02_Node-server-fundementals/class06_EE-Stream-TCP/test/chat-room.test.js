const assert = require('assert');
const ChatRoom = require('../lib/chat-room');

describe('chat room', () => {

    let chat = null;
    let client = null;
    beforeEach(() => {
        chat = new ChatRoom();
        client = {};
        chat.addClient(client);
    });

    it('adds a client, assigns username to client', () => {
        assert.ok(client.username);
    });

    it('clients can be retrieved via username', () => {
        const got = chat.getClient(client.username);
        assert.equal(got, client);
    });

    it('renames a client', () => {
        const newUsername = 'custom';
        const oldUsername = client.username;
        const status = chat.renameClient(oldUsername, newUsername);
        
        assert.equal(status, true);
        assert.equal(client.username, newUsername);
        assert.equal(chat.getClient(oldUsername), null);
        assert.equal(chat.getClient(newUsername), client);
    });

    it('does nothing when renaming to existing username', () => {
        const client2 = {};
        chat.addClient(client2);
        const oldUsername = client.username;
        const status = chat.renameClient(oldUsername, client2.username);
        assert.equal(status, false);
        assert.equal(client.username, oldUsername);
        assert.equal(chat.getClient(client2.username), client2);
        assert.equal(chat.getClient(client.username), client);
    });

    it('returns all clients', () => {
        const client2 = {};
        chat.addClient(client2);
        const clients = chat.all();
        assert.deepEqual(clients, [client, client2]);
    });
});