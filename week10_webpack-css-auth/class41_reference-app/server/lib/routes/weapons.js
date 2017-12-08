const Router = require('express').Router;
const router = Router();
const respond = require('../util/respond');
const Weapon = require('../models/weapon');

router
    .get('/', respond(() => {
        return Weapon.find().lean();
    }))
    
    .post('/', respond(({ body }) => {
        return new Weapon(body).save();
    }))
    
    .put('/:id', respond(({ params: { id }, body }) => {
        return Weapon.findByIdAndUpdate(id, body, 
            { new: true, runValidators: true }
        ).lean();
    }))
    
    .delete('/:id', respond(async ({ params: { id } }) => {
        const weapon = await Weapon.findByIdAndRemove(id);
        return { removed: !!weapon };
    }));

module.exports = router;