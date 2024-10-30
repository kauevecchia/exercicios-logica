// Create a program that reads 5 numbers and find the average of these numbers

// Create a program that:

// Reads the 5 numbers you want
// Calculates the average of these numbers
// Input example: 4, 6, 1, 4, 9
// Ouput: "the average is 4.8"

const prompt = require('readline-sync')

const input = prompt.question("Insira 5 números, para achar a média deles: ")
const numbers = input.split(" ").map(Number)
let total = 0

for(i = 0; i < numbers.length; i++) {
    total += numbers[i]
}

const average = total / input.length
console.log(average.toFixed(2))