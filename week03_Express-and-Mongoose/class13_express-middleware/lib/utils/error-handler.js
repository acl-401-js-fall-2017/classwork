module.exports = function createErrorHandler() {
    // eslint-disable-next-line
    return (err, req, res, next) => {
        // default if we don't know is 500
        // (don't leak information if you don't know what the error is)
        // (we could check for "dev" mode and then show)
        let code = 500;
        let error = { error: 'Internal Server Error' };

        // this is for errors we send to next, like:
        // { code: 404, error: 'id not found'}
        if(err.code) {
            code = err.code;
            error = err.error;
        }
        // this is for bad mongodb _id's
        else if(err.name === 'CastError') {
            code = 400;
            error = { error: err.message };
        }
        // this for validation errors
        else if(err.name === 'ValidationError') {
            code = 400;
            
            error = { 
                // can be more than one validation error,
                // so we send back array of all error messages
                error: Object.values(err.errors)
                    .map(value => value.message)
            };
        }
        else {
            // if it was a 500, log it on the server so we can
            // see what happened
            console.log(err); // eslint-disable-line
        }

        // send it back!
        res.status(code).json(error);
    };
}