const router = require('express').Router();
const BoardGame = require('../models/board-game');
const ToyBox = require('../models/toy-box');
const respond = require('../respond');

module.exports = router
    .post('/', respond(async req => {
        return new BoardGame(req.body).save();
    }))

    .get('/', respond(async () => {
        return BoardGame.find();
    }))
    
    .delete('/:id', respond(async req => {
        const id = req.params.id;
        const count = await ToyBox.find({ boardGames: id}).count();
        if(count > 0) throw { code: 400, error: 'cannot delete board game still in toybox' };
        
        const boardGame = await BoardGame.findByIdAndRemove(id);
        const removed = boardGame ? true : false;
        return { removed };
    }));
