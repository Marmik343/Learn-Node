const names = require('./people'); //use the require method to import other files.

/*

const {people , ages} = require('./people');

This has to be the same as "people" in module.exports in the people.js file.
used if you want to use only one attribute

Then we can use

console.log(people , ages);

*/


// If we console.log(names), we get an empty object, If we dont use module.exports

console.log(names); // whatever is saved in the module.exports is refelected here.
console.log(names.people);
console.log(names.ages);

// If we console.log(people), we get Reference error: people not defined.

//console.log(people); // just because we imported the file people.js, it does not give us access to the things in that file.

const os = require('os'); // in-built in node.js