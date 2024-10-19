// Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.

const prompt = require('readline-sync')

const fahrenheit = prompt.question("Fahrenheit: ")
const celcius = 5 * ((fahrenheit - 32) / 9)

console.log(`${fahrenheit}°F é igual à ${celcius}°C`)