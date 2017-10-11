const promisify = require('util').promisify;
const fs = require('fs');

module.exports = {
    mkdir: promisify(fs.mkdir),
    readdir: promisify(fs.readdir),
    writeFile: promisify(fs.writeFile),
    readFile: promisify(fs.readFile)
};
