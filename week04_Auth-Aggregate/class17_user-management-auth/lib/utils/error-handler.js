// eslint-disable-next-line
module.exports = function createErrorHandler(log = console.log) {
    
    let showLog = process.env.NODE_ENV !== 'production';

    // eslint-disable-next-line
    return (err, req, res, next) => {
        let code = 500;
        let error = 'Internal Server Error';

        if(err.code) {
            code = err.code;
            error = err.error;
        }
        else if(err.name === 'CastError') {
            code = 400;
            error = err.message;
        }
        else if(err.name === 'ValidationError') {
            code = 400;
            error = Object.values(err.errors).map(e => e.message);
        }
        else {
            log(err);
        }
        
        if(showLog) log(code, error);

        res.status(code).json({ error });
    };
};