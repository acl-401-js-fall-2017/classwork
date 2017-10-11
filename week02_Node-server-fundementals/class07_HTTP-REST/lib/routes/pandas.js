const staticPandas = [
    'Jake the Super Panda', 
    'Sally Sumo Panda',
    'Tiny'
];

module.exports = function pandas(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(staticPandas));
};