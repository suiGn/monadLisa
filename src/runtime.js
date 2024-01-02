import repl from 'repl';
const ThisMe = require('./this.me'); // Your this.me library
const Cleaker = require('cleaker'); // The cleaker library for DIDs

// Initialize your libraries or any setup needed
const thisMeInstance = new ThisMe();
const cleakerInstance = new Cleaker();

// Start the custom REPL
const myRepl = repl.start({ prompt: 'myApp> ' });

// Expose your instances to the REPL context
myRepl.context.thisMe = thisMeInstance;
myRepl.context.cleaker = cleakerInstance;

console.log('Interactive Node Runtime started. Use `thisMe` and `cleaker` directly.');
