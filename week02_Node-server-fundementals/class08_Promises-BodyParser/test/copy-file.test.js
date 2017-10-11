const assert = require('assert');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');

const copyFile = require('../lib/copy-file');

describe('copy file', () => {

    const copyFileDir = path.join(__dirname, 'copy-file');
    const source = path.join(copyFileDir, '/copy-me.txt');
    const dest = path.join(copyFileDir, '/copied.txt');
    const sourceContents = 'I am the source file';

    beforeEach(done => {
        rimraf(copyFileDir, err => {
            if(err) return done(err);
            mkdirp(copyFileDir, err => {
                if(err) return done(err);
                fs.writeFile(source, sourceContents, err => {
                    if(err) return done(err);
                    done();
                });
            });
        });
    });

    it('copies a file', done => {
        // call our asynchronous function
        copyFile(source, dest, err => {
            // did it fail?
            if(err) return done(err);
            // read the dest file
            fs.readFile(dest, 'utf8', (err, data) => {
                // did that fail?
                if(err) return done(err);
                // make sure contents are correct
                assert.equal(data, sourceContents);
                // finally!!! tell mocha this test is done
                done();
            });
        });
    });
});