// Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal. 
// Usando a seguinte fórmula: (72.7*altura) - 58

const prompt = require('readline-sync')

const altura = Number(prompt.question("Insira sua altura em metros: "))
const pesoIdeal = ((72.7 * altura) - 58).toFixed(2)



console.log(`Seu peso ideal é de: ${pesoIdeal}kg`)