const assert = require('assert');
const { writeFile, readFile } = require('../lib/fsp');
const path = require('path');

const promisify = require('util').promisify;
const rimraf = promisify(require('rimraf'));
const mkdirp = promisify(require('mkdirp'));

const copyFile = require('../lib/copy-file');

describe('copy file', () => {

    const copyFileDir = path.join(__dirname, 'copy-file');
    const source = path.join(copyFileDir, '/copy-me.txt');
    const dest = path.join(copyFileDir, '/copied.txt');
    const sourceContents = 'I am the source file';

    beforeEach(() => {
        return rimraf(copyFileDir)
            .then(() => {
                return mkdirp(copyFileDir);
            })
            .then(() => {
                return writeFile(source, sourceContents);
            });
    });

    it('copies a file', () => {
        return copyFile(source, dest)
            .then(() => {
                return readFile(dest, 'utf8');
            })
            .then(data => {
                assert.equal(data, sourceContents);
            });
    });
});