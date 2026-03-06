// 1. If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

let country = 'Brazil';
let continent = 'South-america';
let population = 213_421_037;
const isIsland = false;
const Language = "Português";

let average = population - 33e6

if(country > 33e6) {
    console.log(`${country}'s population is ${average} million below average.`);
} else {
    console.log(`${country}'s population is ${average} million above average.`)
};

// 2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.