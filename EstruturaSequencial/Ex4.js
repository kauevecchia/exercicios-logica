// Faça um Programa que peça as 4 notas bimestrais e mostre a média.

const prompt = require('readline-sync')

const nota1 = Number(prompt.question("Digite a primeira nota: "))
const nota2 = Number(prompt.question("Digite a segunda nota: "))
const nota3 = Number(prompt.question("Digite a terceira nota: "))
const nota4 = Number(prompt.question("Digite a quarta nota: "))

const media = (nota1 + nota2 + nota3 + nota4) / 4

console.log(`A média das notas é: ${media}`)