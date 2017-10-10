const createChatApp = require('./lib/create-chat');

const server = createChatApp();
server.listen(15678, () => {
    // eslint-disable-next-line
    console.log('chat server running');
});