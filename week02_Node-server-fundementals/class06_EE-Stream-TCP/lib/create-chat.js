const net = require('net');
const ChatRoom = require('./chat-room');
const parseMessage = require('./parse-message');

module.exports = function createChat() {
    const chat = new ChatRoom();
    
    const app = net.createServer(client => {
        client.setEncoding('utf8');
        chat.addClient(client);
        
        const sendAll = (fromUser, message) => {
            const toSend = `${fromUser}: ${message}` + '\n';
            chat.all().forEach(client => client.write(toSend));
        };

        sendAll(client.username, 'has joined');

        client.on('data', message => {
            const parts = message.split('@');
            if(parts.length < 2) return;

            parts.forEach(part => {
                if(!part) return;
                const action = parseMessage('@' + part);

                switch(action.command) {
                case 'all': 
                    sendAll(client.username, action.text);
                    break;
                case 'nick': {
                    const oldName = client.username;
                    const newName = action.arg;
                    if(chat.renameClient(oldName, newName)) {
                        sendAll(oldName, `changed name to ${newName}`);
                    }
                    break;
                }
                default:
                    break;
                }
            });
        });
    });

    return app;
};
