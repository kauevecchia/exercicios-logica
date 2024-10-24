// Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.

const prompt = require('readline-sync')
let numeros = []
let impar = 0
let par = 0

for(i = 0; i < 10; i++) {
    numeros.push(Number(prompt.question(`Insira o ${i + 1}° número: `)))
}

for(i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 == 0) {
        par++
    } else {
        impar++
    }
}

console.log(`Ímpar: ${impar}, Par: ${par}`)