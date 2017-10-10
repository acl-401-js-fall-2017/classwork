module.exports = function parseMessage(message) {
    if(!message || message[0] !== '@') return {};

    const words = message.split(' ');
    const action = words.shift();
    const split = action.split(':');
    const command = split[0].slice(1);
    const arg = split[1];
    const text = words.join(' ');

    return {
        command,
        arg,
        text
    };
};