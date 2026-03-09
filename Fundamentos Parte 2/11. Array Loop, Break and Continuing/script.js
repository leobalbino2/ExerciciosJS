// 1. Let's bring back the populations array from a previous assignment.

let brazilPop = 213;
let italyPop = 50;
let portugalPop = 10;
let japanPop = 124;

let populations = [brazilPop, italyPop, portugalPop, japanPop];

function percentageOfWorld1(population) {
    return population / 7900 * 100;
};

// 2.  Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

let percentages2 = [];

for (i = 0; i <= populations.length - 1; i++) {
    percentages2.push(percentageOfWorld1(populations[i]).toFixed(2));
};

console.log(percentages2);

// 3.  Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.

/* Resolução

const populations = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}

console.log(percentages2);

*/