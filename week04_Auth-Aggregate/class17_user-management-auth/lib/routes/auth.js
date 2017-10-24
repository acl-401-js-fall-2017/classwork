const router = require('express').Router();
const User = require('../models/user');

module.exports = router
    .post('/signup', (req, res, next) => {
        const { email, password } = req.body;
        delete req.body.password;

        if(!password) throw { code: 400, error: 'password is required'};

        User.emailExists(email)
            .then(exists => {
                if(exists) {
                    throw { code: 400, error: 'email already exists'};
                }

                const user = new User(req.body);
                user.generateHash(password);
                
                return user.save();
            })
            .then(() => {
                res.send({ token: 'sekrit' });
            })
            .catch(next);
    })
    
    .post('/signin', (req, res, next) => {
        const { email, password } = req.body;
        delete req.body.password;

        if(!password) throw { code: 400, error: 'password is required'};
        
        User.findOne({ email })
            .then(user => {
                if(!user || !user.comparePassword(password)) {
                    throw { code: 401, error: 'authentication failed' };
                }
            })
            .then(() => {
                res.send({ token: 'sekrit' });
            })
            .catch(next);
    });