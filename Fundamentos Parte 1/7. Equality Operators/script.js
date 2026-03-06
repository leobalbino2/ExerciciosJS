// 1. Declare a variable numNeighbours based on a prompt input like this:

const numNeighbours = prompt('How many neighbour countries does your contry have?');

// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

// 3. Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

// 4. Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

// 5. Test the code with different values of numNeighbours, including 1 and 0.

// 6. Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

// 7. Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

// 8. Reflect on why we should use the === operator and type conversion in this situation.

if (Number(numNeighbours) === 1) { // aqui tive de adicionar o Number por causa da comparação do ===
    console.log('Only 1 border!');
} else if (numNeighbours >= 1) {
    console.log('More than 1 border!');
} else {
    console.log('No borders.');
};

// O numNeighbours é string, e ali compara tanto o tipo quanto valor, ou seja ele pula pro else if pois numNeighbours é uma string e o 1 um número
// Nessa situação deve-se utilizar o conversor de tipagem para ocorrer a conversão da string ali no if.

// Indicado utilizar diretamente a conversão nestes casos para evitar bugs 
const numNeighbours1 = number(prompt('How many neighbour countries does your contry have?'));