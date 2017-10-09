const fs = require('fs');

const source1 = fs.createReadStream('http-server.js');
const source2 = fs.createReadStream('event-emitter.js');
const copy = fs.createWriteStream('fly.js');


source1.on('data', chunk => {
    copy.write(chunk);
});

source2.on('data', chunk => {
    copy.write(chunk);
});

let count = 0;
const end = () => {
    count++;
    if(count === 2) copy.end();
}

source1.on('end', end);
source2.on('end', end);