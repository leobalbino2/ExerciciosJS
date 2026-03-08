// 1. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

let country = 'Brazil';
let continent = 'South-america';
let population = 213_421_037;
const isIsland = false;
const Language = "Português";

// 2. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

// 3. If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.

// 4. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).

if (Language === 'English' && population < 50e6 && !isIsland) {
    console.log(`You should live in ${country}`)
} else {
    console.log(`${country} does not meet your criteria :(`)
}; 