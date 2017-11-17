module.exports = function() {

    return function errorHandler(err, req, res, next) { //eslint-disable-line no-unused-vars

        let code = 500, error = 'Internal Server Error';

        // Mongoose Validation Error?
        if(err.name === 'ValidationError' || err.name === 'CastError') {
            code = 400;
            error = err.message;
            console.log('ERROR', code, error);
        }
        // is this one of our errors?
        else if(err.code) {
            // by convention, we're passing in an object
            // with a code property === http statusCode
            // and a error property === message to display
            code = err.code;
            error = err.error;
            console.log('ERROR', err.code, err.error);
        }
        // or something unexpected?
        else {
            console.log('ERROR*', err);
        }

        res.status(code).send({ error });
    };
};