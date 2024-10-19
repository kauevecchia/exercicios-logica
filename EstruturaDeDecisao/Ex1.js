// Faça um Programa que peça dois números e imprima o maior deles.

const prompt = require('readline-sync')
const numero1 = Number(prompt.question("Digite o primeiro número: "))
const numero2 = Number(prompt.question("Digite o segundo número: "))

if(numero1 > numero2) {
    console.log(`O maior número é ${numero1}.`)
} else if(numero2 > numero1) {
    console.log(`O maior número é ${number2}.`)
} else {
    console.log("Os números são iguais.")
}