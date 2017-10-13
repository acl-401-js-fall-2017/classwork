module.exports = function bodyParser(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', data => {
            body += data;
        });

        req.on('end', () => {
            try {
                const obj = body ? JSON.parse(body) : null;
                resolve(obj);
            }
            catch(err) {
                reject(err);
            }
        });

        req.on('error', reject);
    });
};