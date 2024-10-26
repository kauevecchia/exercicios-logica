// Os números primos possuem várias aplicações dentro da Computação, por exemplo na Criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.

const prompt = require('readline-sync')

const num = Number(prompt.question("Insira um número inteiro: "))
let count = 0

for(i = 0; i <= num; i++) {
    let resultado = num / (i + 1)
    let inteiroOuDecimal = resultado.toString().includes('.') ? "Decimal" : "Inteiro"
    if(inteiroOuDecimal === "Inteiro") {
        count++
    }
}

if(count == 2) {
    console.log(`${num} é um número primo.`)
} else {
    console.log(`${num} não é um número primo.`)
}

console.log(count)