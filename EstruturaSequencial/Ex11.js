// Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
// 1. o produto do dobro do primeiro com metade do segundo .
// 2. a soma do triplo do primeiro com o terceiro.
// 3. o terceiro elevado ao cubo.

const prompt = require('readline-sync')

const inteiro1 = Number(prompt.question("Insira um número inteiro: "))
const inteiro2 = Number(prompt.question("Insira outro número inteiro: "))
const real = Number(prompt.question("Insira um número real: "))

function problema1 (inteiro1, inteiro2) {
    return (inteiro1 * 2) * (inteiro2 / 2)
}

function problema2 (inteiro1, real) {
    return (inteiro1 * 3) + real
}

function problema3 (real) {
    return Math.pow(real, 3)
}

console.log(`Problema 1: ${problema1(inteiro1, inteiro2)} / Problema 2: ${problema2(inteiro1, real)} / Problema 3: ${problema3(real)}`)