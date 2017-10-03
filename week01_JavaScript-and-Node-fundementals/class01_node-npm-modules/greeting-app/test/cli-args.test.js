const assert = require('assert');
const getArgs = require('../lib/cli-args');
const execSync = require('child_process').execSync;

describe('cli args', () => {     
    it('extracts name from argv', () => {
        const options = getArgs(['node', 'greet.js', 'meow-meow']);
        assert.deepEqual(options, { name: 'meow-meow' });
    });
    
    it('cli integrates with greeting', () => {
        const output = execSync('node greeting-cli meow-meow', { encoding: 'utf8' });
        assert.equal(output, 'hello meow-meow\n');
    });
});