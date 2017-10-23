/* eslint no-console: off, no-unused-vars: off */

async function getPersonFromDb(id) {
    // pretend to get person by id from db
    return await Promise.resolve({ first: 'jo', last: 'jo' });
}

async function getFullName(id) {
    const person = await getPersonFromDb(id);
    return `${person.first} ${person.last}!!!`;
}

async function run() {
    try {
        const fullName = await getFullName(123);
        console.log('full name:', fullName);
    }
    catch(err) {
        console.log('ERROR', err.message);
    } 
}

console.log('what did run return?', run());
