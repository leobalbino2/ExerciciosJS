// 1. Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

let percentageOfWorld3 = population => population / 7900 * 100;

let brazilPercentage = percentageOfWorld3(213);

console.log(`Brazil has 213 million people, so it's about ${brazilPercentage.toFixed(2)}% of the world population.`);
