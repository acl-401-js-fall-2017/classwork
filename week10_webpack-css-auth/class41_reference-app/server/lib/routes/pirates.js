const Router = require('express').Router;
const router = Router();
const respond = require('../util/respond');
const Pirate = require('../models/pirate');

router
    .get('/', respond(() => {
        return Pirate.find()
            .select('name role crew')
            .populate('crew', 'name')
            .lean();
    }))
    
    .get('/:id', respond(async ({ params: { id } }) => {
        const pirate = await Pirate.findById(id)
            .populate('crew', 'name')
            .lean();
            
        if(!pirate) throw { code: 404, error: `crew id ${id} does not exist` };
        return pirate;
    }))
    
    .post('/', respond(({ body }) => {
        return new Pirate(body).save();
    }))
    
    .put('/:id', respond(({ params: { id }, body }) => {
        return Pirate.findByIdAndUpdate(id, body, 
            { new: true, runValidators: true }
        ).lean();
    }))
    
    .delete('/:id', respond(async ({ params: { id } }) => {
        const pirate = await Pirate.findByIdAndRemove(id);
        return { removed: !!pirate };
    }));

module.exports = router;