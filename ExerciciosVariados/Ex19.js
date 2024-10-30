// Create a program that reads a number that you want to get the sum until that number

// Create a program that:

// Reads the number you want to sum
// Calculates the sum of 1+2+3+4...+98+99+n
// Prints the sum of 1+2+3+4...+98+99+n
// Input example: 100
// Output: "The sum is 5050"

const prompt = require('readline-sync')

const number = Number(prompt.question("Você quer somar até qual número? "))
let sum = 0

for(i = 1; i < number; i++) {
    sum += i
}

console.log(sum)
