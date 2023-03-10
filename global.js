// Global Object

console.log(global); // list the methods in the global tree

global.setTimeout(() => {  // also works setTimeout(() => {},timeout), no need to specify the global keyword
    console.log("My name is Kung Lao!");
    // clearInterval(int), this will clear the interval int after 3seconds.
}, 3000);  //runs the function after 3000 ms or 3 seconds


/* cont int = global.setInterval(() => {  // runs every *interval* seconds.
    
}, interval);

*/

console.log(__dirname); // full directory name
console.log(__filename); // full path



