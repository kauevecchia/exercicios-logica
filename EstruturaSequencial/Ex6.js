// Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.

const prompt = require('readline-sync')

const raio = prompt.question("Insira o raio do círculo: ")

const area = Math.PI * Math.pow(raio, 2)
console.log(area)