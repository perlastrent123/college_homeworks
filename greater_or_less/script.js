// node.js header to allow prompt to work on consoles
// learn more: https://www.npmjs.com/package/prompt-sync?activeTab=readme
const prompt = require ("prompt-sync")({sigint: true})

function getNumber(msg) {
    let user_input = Number(prompt(msg));

    if (isNaN(user_input)) {
    console.log("Please enter numbers only.");
    process.exit(1);
    }

    return user_input;
}

let number_1 = getNumber("Enter 1st number: ");
let number_2 = getNumber("Enter 2nd number: ");
let result = (number_1 === number_2) ? "equal to" : (number_1 > number_2) ? "greater than" : "less than";

console.log(`${number_1} is ${result} ${number_2}`);