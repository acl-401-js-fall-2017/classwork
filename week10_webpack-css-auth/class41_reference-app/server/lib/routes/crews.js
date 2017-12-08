const Router = require('express').Router;
const router = Router();
const respond = require('../util/respond');
const Crew = require('../models/crew');
const Pirate = require('../models/pirate');

router
    .get('/', respond(() => {
        return Crew.find().lean();
    }))
    
    .get('/:id', respond(async ({ params: { id } }) => {
        const [ crew, pirates ] = await Promise.all([
            Crew.findById(id).lean(),
            Pirate.find({ crew: id }).lean()
        ]);

        if(!crew) throw { code: 404, error: `crew id ${id} does not exist` };
        
        crew.pirates = pirates;
        return crew;
    }))
    
    .post('/', respond(({ body }) => {
        return new Crew(body).save();
    }))
    
    .put('/:id', respond(({ params: { id }, body }) => {
        return Crew.findByIdAndUpdate(id, body, 
            { new: true, runValidators: true }
        ).lean();
    }))
    
    .delete('/:id', respond(async ({ params: { id } }) => {
        const [ crew ] = await Promise.all([
            Crew.findByIdAndRemove(id),
            Pirate.update({ crew: id }, { $unset: { crew: null }})
        ]);
        return { removed: !!crew };
    }));

module.exports = router;