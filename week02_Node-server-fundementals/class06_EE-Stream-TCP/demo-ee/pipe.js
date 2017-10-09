const fs = require('fs');

const source = fs.createReadStream('/Users/marty/big.pdf');
const copy = fs.createWriteStream('pipe-copy.pdf');

source.pipe(copy);