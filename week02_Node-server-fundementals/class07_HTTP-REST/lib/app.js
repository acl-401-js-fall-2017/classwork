const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    if(req.method === 'POST') {
        bodyParser(req)
            .then(body => {
                res.write('you posted: ');
                res.write(JSON.stringify(body, true, 2));
                res.end();
            });
    }
    else {
        res.end(`you just ${req.method}, how boring`);
    }
};