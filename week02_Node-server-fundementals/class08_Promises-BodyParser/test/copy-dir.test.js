const assert = require('assert');
const fs = require('fs');
const rimraf = require('rimraf');
const copyDir = require('../lib/copy-dir');

describe('copy directory', () => {
    const source = './test/test-dir';
    const dest = './test/copied-dir';

    beforeEach(done => {
        // delete the copied to dir so we have a blank slate
        // (note: short-hand, we just pass done into "final" callback)
        rimraf(dest, done);
    });

    it('copies the directory', done => {
        // call the function we are testing
        copyDir(source, dest, err => {
            // did it fail? if so test over with failure
            if(err) return done(err);

            // let's read the source dir
            fs.readdir(source, (err, sourceFiles) => {
                if(err) return done(err);

                // now let's read the dest dir
                fs.readdir(dest, (err, destFiles) => {
                    if(err) return done(err);
        
                    // if they both have same array of files names, pass!
                    assert.deepEqual(sourceFiles, destFiles);
                    // let mocha know test is done
                    done();
                });
            });
        });
    });


    it('copies the directory (showing parallel read test)', done => {
        // call the function we are testing
        copyDir(source, dest, err => {
            // did it fail? if so test over with failure
            if(err) return done(err);

            fs.readdir(source, callback);
            fs.readdir(dest, callback);
            
            const dirFiles = [];
            function callback(err, files) {
                if(err) return done(err);
                dirFiles.push(files);
                if(dirFiles.length === 2) {
                    assert.deepEqual(dirFiles[0], dirFiles[1]);
                    done();                    
                }
            }
        });
    });
});