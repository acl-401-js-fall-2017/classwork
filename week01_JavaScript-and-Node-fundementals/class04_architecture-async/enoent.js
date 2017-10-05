const fs = require('fs');


function getThing(fileName, callback) {
    
    fs.readFile(fileName, (err, data) => {
        if(err && err.code === 'ENOENT') return callback(null, null);
        if(err) return callback(err);
        
        callback(null, JSON.parse(data));
    });
}