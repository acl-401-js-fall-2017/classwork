module.exports = {
    drop(connection) {
        return () => {
            return new Promise((resolve, reject) => {
                const drop = () => connection.db.dropDatabase((err, val) => {
                    err ? reject(err) : resolve(val);
                });
                if (connection.readyState === 1) drop();
                else connection.on('open', drop);
            });
        };
    }
};