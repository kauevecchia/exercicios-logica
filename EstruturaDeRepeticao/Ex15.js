// A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.

const prompt = require('readline-sync')

const n = Number(prompt.question("Insira um número: "))
const sequencia = [1, 1]
let novoNumero

for(i = 1; i < n; i++) {
    novoNumero = (sequencia[i] + sequencia[i - 1])
    sequencia.push(novoNumero)
}

console.log(sequencia)