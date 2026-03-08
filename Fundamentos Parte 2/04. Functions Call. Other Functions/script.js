// 1. Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

// 2. To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

function percentageOfWorld1(population) {
    return population / 7900 * 100;
};

// 3. Call describePopulation with data for 3 countries of your choice.

const describePopulation = function(country, population) {
    let percentagePop = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentagePop.toFixed(2)} of the world.`;
};

let brazil = describePopulation("Brazil", "213");

console.log(brazil);