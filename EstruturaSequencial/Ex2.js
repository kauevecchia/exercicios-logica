// Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].

const prompt = require('readline-sync')

const number = Number(prompt.question("Digite um número. "))
console.log(`O número informado foi ${number}`)