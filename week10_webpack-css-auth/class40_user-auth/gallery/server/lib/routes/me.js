const Router = require('express').Router;
const router = Router();
const User = require('../models/user');


router
    .get('/', (req, res, next) => {
        User.findById(req.user.id)
          .select('name favorites')
          .lean()
          .then(user => res.send(user))
          .catch(next);
    });
    
module.exports = router;