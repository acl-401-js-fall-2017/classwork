module.exports = class ChatRoom {

    constructor() {
        this.clients = new Map();
        this.counter = 0;
    }

    addClient(client) {
        const username = `user${++this.counter}`;
        client.username = username;
        this.clients.set(username, client);
    }

    getClient(username) {
        return this.clients.get(username);
    }

    renameClient(oldName, newName) {
        if(this.clients.has(newName)) return false;

        const client = this.clients.get(oldName);
        client.username = newName;
        this.clients.delete(oldName);
        this.clients.set(newName, client);
        return true;
    }

    all() {
        return [...this.clients.values()];
    }
};
