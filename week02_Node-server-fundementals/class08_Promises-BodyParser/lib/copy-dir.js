const fs = require('fs');
const path = require('path');
const copyFile = require('./copy-file');

module.exports = function copyDir(sourceDir, destDir, callback) {

    fs.readdir(sourceDir, directories);
    fs.mkdir(destDir, directories);

    let files = null;
    let count = 0;

    function directories(err, sourceFiles) {
        if(err) return callback(err);
        if(sourceFiles) files = sourceFiles;
        count++;
        if(count < 2) return; 

        let fileCount = files.length;
        files.forEach(file => {
            const sourceFile = path.join(sourceDir, file);
            const destFile = path.join(destDir, file);

            copyFile(sourceFile, destFile, err => {
                if(err) return callback(err);
                fileCount--;
                if(fileCount === 0) callback();
            });
        });
    }
};