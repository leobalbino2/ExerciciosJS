// 1. Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

// 2. Reflect on what solution you like better for this task: the for loop or the while loop?

let brazilPop = 213;
let italyPop = 50;
let portugalPop = 10;
let japanPop = 124;

let populations = [brazilPop, italyPop, portugalPop, japanPop];

function percentageOfWorld1(population) {
    return population / 7900 * 100;
};

let percentages3 = [];

let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]).toFixed(2));
    i++;
}

console.log(percentages3);