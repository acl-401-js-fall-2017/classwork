const { assert } = require('chai');
const Crew = require('../lib/models/crew');

describe.only('Crew Model', () => {

    it('good model', () => {
        const crew = new Crew({
            name: 'Straw Hats',
            dateFound: new Date(),
            colors: ['red', 'white', 'yellow'],
            pirates: [
                { 
                    name: 'Monkey D Luffy',
                    role: 'Captain',
                    weapons: ['fists']
                },
                { 
                    name: 'Nami',
                    role: 'Navigator',
                    weapons: ['climatact']
                }
            ],
            homebase: {
                island: 'Skull Island',
                bodyOfWater: 'East Blue'
            },
            gold: 12345
        });

        assert.equal(crew.validateSync(), undefined);
    });

    it('required fields', () => {
        const crew = new Crew({});
        const { errors } = crew.validateSync();
        assert.equal(errors['name'].kind, 'required');
        assert.equal(errors['gold'].kind, 'required');
        assert.equal(errors['homebase.bodyOfWater'].kind, 'required');
    });

    it('bodyOfWater must be a Blue sea', () => {
        const crew = new Crew({
            homebase: { 
                bodyOfWater: 'NOT A SEA'
            }
        });
        const { errors } = crew.validateSync();
        assert.equal(errors['homebase.bodyOfWater'].kind, 'enum');
    });

    it('gold must be non-negative', () => {
        const crew = new Crew({ gold: -42 });
        const { errors } = crew.validateSync();
        assert.equal(errors['gold'].kind, 'min');
    });

    // example of array validation
    it('Visited must be a Blue Sea', () => {
        const crew = new Crew({ 
            visited: [
                { name: 'East Blue' },
                { name: 'NOT A SEA' }
            ] 
        });
        const { errors } = crew.validateSync();
        assert.equal(errors['visited.1.name'].kind, 'enum');
    });

});