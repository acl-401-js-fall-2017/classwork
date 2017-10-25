const request = require('superagent');

const API_URL = 'https://swapi.co/api';
// add other common things for this api
const API_KEY = process.env.STARWARS_API_KEY;

module.exports = {
    getPeople() {
        return request.get(`${API_URL}/people`)
            .then(({ body }) => {
                // clean any data;
                return body;
            });
    },
    getPlanets() {
        return request.get(`${API_URL}/planets`)
            .then(({ body }) => {
                // clean any data;
                return body;
            });
    }
}