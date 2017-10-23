

function fullName(person) {
    return `${person.first} ${person.last}`;
}

function callFullName() {
    return fullName();
}

const fullname = callFullName();
console.log(fullname);
