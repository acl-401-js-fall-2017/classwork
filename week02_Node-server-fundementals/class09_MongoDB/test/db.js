const mongodb = require('../lib/mongodb');
const url = 'mongodb://localhost:27017/pirates-test';

before(() => mongodb.connect(url));    
after(() => mongodb.db.close());
