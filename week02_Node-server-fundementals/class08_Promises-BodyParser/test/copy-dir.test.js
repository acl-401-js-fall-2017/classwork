const assert = require('assert');
const { readdir } = require('../lib/fsp');
const promisify = require('util').promisify;
const rimraf = promisify(require('rimraf'));
const copyDir = require('../lib/copy-dir');

describe('copy directory', () => {
    const source = './test/test-dir';
    const dest = './test/copied-dir';

    beforeEach(() => rimraf(dest));

    it('copies the directory', () => {
        return copyDir(source, dest)
            .then(() => {
                return Promise.all([
                    readdir(source),
                    readdir(dest)
                ]);
            })
            .then(([sourceFiles, destFiles]) => {
                assert.deepEqual(sourceFiles, destFiles);
            });    
    });
});