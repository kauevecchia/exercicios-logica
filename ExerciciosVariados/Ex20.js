// Create a program that reads a number that you want to get the sum until that number and then calculate the averge of these numbers

// Create a program that:

// Reads the number you want to sum
// Calculates the sum of 1+2+3+4...+98+99+n
// Calculates the average of the sum 1+2+3+4...+98+99+n
// Input example: 100
// Output: "The average is 50.5"

const prompt = require('readline-sync')

const number = Number(prompt.question("Você quer somar até qual número? "))
let count = 0
let numbers = 0

for(i = 1; i <= number; i++) {
    count += i
    numbers++
}

const average = count / numbers
console.log(average)