// Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo

const prompt = require('readline-sync')

const num = Number(prompt.question("Insira um número: "))
let tabuada

for(i = 0; i <= 10; i++) {
    tabuada = num * i
    console.log(`${num}x${i} = ${tabuada}`)
}