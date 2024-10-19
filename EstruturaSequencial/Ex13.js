// Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// Para homens: (72.7*h) - 58
// Para mulheres: (62.1*h) - 44.7

const prompt = require('readline-sync')

const altura = Number(prompt.question("Insira sua altura em metros: "))
const sexo = prompt.question("Insira seu sexo (masculino / feminino): ").toLowerCase()
let pesoIdeal

if (sexo == "masculino") {
    function masculino (altura) {
        return ((72.7 * altura) - 58).toFixed(2)
    }
    pesoIdeal = masculino(altura)
} else if (sexo == "feminino") {
    function feminino (altura) {
        return ((62.1 * altura) - 44.7).toFixed(2)
    }
    pesoIdeal = feminino(altura)
} else {
    console.log('Sexo inválido, por favor, insira "masculino" ou "feminino".')
}

if(pesoIdeal) {
    console.log(`Seu peso ideal é de: ${pesoIdeal}kg`)
}