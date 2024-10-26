// Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120

const prompt = require('readline-sync')

let num = Number(prompt.question("Insira um número: "))

while(num < 0) {
    num = Number(prompt.question("Insira um número positivo: "))
}

function factorial(num) {
    if(num <= 1) {
        return 1
    }

   return num * factorial(num - 1)
}

console.log(factorial(num))