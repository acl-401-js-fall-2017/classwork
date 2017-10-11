const { readdir, mkdir } = require('./fsp');
const path = require('path');

const copyFile = require('./copy-file');

module.exports = function copyDir(sourceDir, destDir) {

    return Promise.all([
        readdir(sourceDir),
        mkdir(destDir)
    ])
    // array destructuring:
    // use position in [] to indicate the index you want
    .then(([sourceFiles]) => {
        const copyFilePromises = sourceFiles.map(file => {
            const sourceFile = path.join(sourceDir, file);
            const destFile = path.join(destDir, file);
            return copyFile(sourceFile, destFile);
        });
        
        return Promise.all(copyFilePromises);
    });
};
