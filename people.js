const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [20, 25, 30, 35];



// if you want the modules.js to not show the empty object when we console.log the const variable "names" in the modules.js file
// use module.exports
// If you want to export mutiple thinhs use  {} object format 

//module.exports = people;   // for singular

module.exports = {
    people,   //is the names are same then use the people , under the hoods this happens , people : people;
    ages
};