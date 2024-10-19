// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

const prompt = require('readline-sync')

const salarioPorHora = prompt.question("Quanto você ganha por hora: ")
const horasTrabalhadas = prompt.question("Quantas horas você trabalha por mês: ")
const salario = salarioPorHora * horasTrabalhadas

console.log(`Você ganha ${salario} por mês.`)