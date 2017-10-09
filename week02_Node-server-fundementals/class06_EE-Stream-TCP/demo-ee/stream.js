const fs = require('fs');

const source = fs.createReadStream('/Users/marty/big.pdf');
const copy = fs.createWriteStream('copy.pdf');

source.on('data', chunk => {
    copy.write(chunk);
});

source.on('end', () => {
    copy.end();
});