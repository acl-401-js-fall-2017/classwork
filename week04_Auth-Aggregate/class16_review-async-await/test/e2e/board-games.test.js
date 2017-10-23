const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('Resource API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    it('saves a board game', async () => {
        const { body } = await request
            .post('/api/board-games')
            .send({ name: 'checkers' });
        
        assert.ok(body._id);
        assert.equal(body.name, 'checkers');
    });

    it('prevents delete when board game in toy box', async () => {
        const { body: chess } = await request
            .post('/api/board-games')
            .send({ name: 'chess' });

        await request
            .post('/api/toy-boxes')
            .send({ 
                color: 'blue',
                boardGames: [chess._id]
            });

        try {
            await request.delete(`/api/board-games/${chess._id}`);
            throw new Error('Delete of board game in toy box should not be successful');
        }
        catch(err) {
            if(err.status !== 400) throw err;
        }
    });
});