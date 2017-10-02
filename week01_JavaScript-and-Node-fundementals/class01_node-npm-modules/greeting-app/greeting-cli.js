// import ("require") the modules we are going to be using
const getArgs = require('./lib/cli-args');
const greet = require('./lib/greet');

// passing process.argv to get the name option
const options = getArgs(process.argv);
// pass the name to the greet function to make the greeting
const greeting = greet(options.name);

// write the greeting to the command line
console.log(greeting);