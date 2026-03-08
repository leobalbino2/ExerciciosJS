// 1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

// 2. Log to the console whether the array has 4 elements or not (true or false).

// 3. Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.

let brazilPop = 213;
let italyPop = 50;
let portugalPop = 10;
let japanPop = 124;

let populations = [brazilPop, italyPop, portugalPop, japanPop];

if (populations.length === 4) {
    console.log(true)
} else {
    console.log(false)
};

console.log(Boolean(populations));

function percentageOfWorld1(population) {
    return population / 7900 * 100;
};

console.log(
    percentageOfWorld1(populations[0]).toFixed(2), 
    percentageOfWorld1(populations[1]).toFixed(2), 
    percentageOfWorld1(populations[2]).toFixed(2), 
    percentageOfWorld1(populations[3]).toFixed(2)
);