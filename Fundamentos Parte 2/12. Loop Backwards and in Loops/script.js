// 1. Store this array of arrays into a variable called listOfNeighbours:

// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// 2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.

// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 

for (let region = 0; region < listOfNeighbours.length; region++) {

  for (let country = 0; country < listOfNeighbours[region].length; country++) {
    console.log(`Neighbour: ${listOfNeighbours[region][country]}`)
  }

}

for (let region = listOfNeighbours.length - 1; region >= 0; region--) {

  for (let country = listOfNeighbours[region].length - 1; country >= 0; country--) {
    console.log(`Neighbour: ${listOfNeighbours[region][country]}`);
  }
}