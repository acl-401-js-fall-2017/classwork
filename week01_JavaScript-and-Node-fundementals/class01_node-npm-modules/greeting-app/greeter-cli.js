const greeter = require('./src/greeter');
const args = require('./src/process-args');

const options = args(process.argv);
console.log(greeter(options));
