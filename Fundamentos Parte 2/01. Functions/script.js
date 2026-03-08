// 1. Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

// 2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

let portugal = describeCountry("Portugal", 10, "Lisbon");
let italy = describeCountry("Italy", 59, "Rome");
let japan = describeCountry("Japan", 124, "Tokyo");

console.log(portugal);
console.log(italy);
console.log(japan);