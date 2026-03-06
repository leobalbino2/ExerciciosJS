// 1. Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

let country = 'Brazil';
let continent = 'South-american';
let population = 213_421_037;
const isIsland = false;
const Language = "Português";

// 3. Try to change one of the changed variables now, and observe what happen

isIsland = true; 

// Uncaught TypeError: Assignment to constant variable. 
// Constantes não podem ser alteradas e devem ter um valor inicial.