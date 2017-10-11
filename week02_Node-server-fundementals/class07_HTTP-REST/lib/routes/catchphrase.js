const url = require('url');
const cowsay = require('cowsay-browser');
const makeCatchphrase = require('./make-catchphrase');

module.exports = function catchphrase(req, res) {
    const { query } = url.parse(req.url, true);        
    let catchphrase = '';
    if(query.format === 'cowsay') {
        res.setHeader('Content-Type', 'text/plain');
        catchphrase = cowsay.say({
            text: 'Bamboo Pandy FTW',
            e : 'oO',
            T : 'U '
        });
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        catchphrase = makeCatchphrase(query.color);
    }
    res.end(catchphrase);
};