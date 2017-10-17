const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const http = require('http');

const app = require('../lib/app');

const server = http.createServer(app);
const request = chai.request(server);

after(() => server.close());

module.exports = request;
