const fs = require('fs');

module.exports = function copyFile(sourceFile, destFile, callback) {
    // initiate readFile
    fs.readFile(sourceFile, (err, data) => {
        // if readFile fails, game over return err to callback
        if(err) return callback(err);

        // write the return buffer to the destFile
        fs.writeFile(destFile, data, err => {
            // error? game over return error to callback
            if(err) return callback(err);
            // tell callback copy work is done
            callback();
        });
        // above same as:
        // fs.writeFile(destFile, data, callback);
    });
};