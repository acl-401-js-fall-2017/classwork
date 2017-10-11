module.exports = function makeCatchphrase(color) {
    let header = '<h1';
    if(color) header += ` style="color: ${color};"`;
    header += '>Bamboo Pandy FTW</h1>';
    return header;
};