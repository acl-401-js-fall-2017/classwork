const { readFile, writeFile } = require('./fsp');

module.exports = function copyFile(sourceFile, destFile) {
    return readFile(sourceFile)
        .then(data => writeFile(destFile, data));
};