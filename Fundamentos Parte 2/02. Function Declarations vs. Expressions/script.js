// 1. The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// 2. To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// 3. Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

// 4. Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

// Function Declaration
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

let brazilPercentage = percentageOfWorld1(213);
console.log(`Brazil has 213 million people, so it's about ${brazilPercentage.toFixed(2)}% of the world population.`);

// Function Expression
let percentageOfWorld2 = function(population) {
    return population / 7900 * 100;
};

let italyPercentage = percentageOfWorld2(50);
let portugalPercentage = percentageOfWorld2(10);
let japanPercentage = percentageOfWorld2(124);

console.log(`Italy has 50 million people, so it's about ${italyPercentage.toFixed(2)}% of the world population.`);
console.log(`Portugal has 10 million people, so it's about ${portugalPercentage.toFixed(2)}% of the world population.`);
console.log(`Japan has 124 million people, so it's about ${japanPercentage.toFixed(2)}% of the world population.`);