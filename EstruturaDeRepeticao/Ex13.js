// Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem.

const prompt = require('readline-sync')

const base = Number(prompt.question("Insira a base: "))
const expoente = Number(prompt.question("Insira a base: "))
let resultado = base

for(i = 0; i < expoente - 1; i++) {
    resultado = resultado * base
}

console.log(resultado)