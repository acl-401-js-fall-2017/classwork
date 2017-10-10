const url = require('url');

const pandas = [
    'Jake the Super Panda', 
    'Sally Sumo Panda',
    'Tiny'
];

module.exports = (req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    // const parsedUrl = url.parse(req.url, true);
    // const { pathname, query } = parsedUrl;
    // const pathname = parsedUrl.pathname;
    // const query = parsedUrl.query;

    const parts = pathname.slice(1).split('/');

    if(parts[0] === 'catchphrase') {
        const color = query.color;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1');
        if(color) res.write(` style="color: ${color};"`);
        res.end('>Bamboo Pandy FTW</h1>');
    }
    else if(parts[0] === 'pandas') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(pandas));
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.statusMessage = 'Hiding';
        res.end('<h4>all the pandas are hiding, look somewhere else</h4>');
    }
    
};