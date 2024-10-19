// Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

const prompt = require('readline-sync')

const nota1 = Number(prompt.question("Insira sua primeira nota: "))
const nota2 = Number(prompt.question("Insira sua segunda nota: "))
const media = (nota1 + nota2) / 2
let conceito

if(media >= 9 && media <= 10) {
    conceito = "A"
} else if(media >= 7.5) {
    conceito = "B"
} else if(media >= 6) {
    conceito = "C"
} else if(media >= 4) {
    conceito = "D"
} else if(media < 4) {
    conceito = "E"
}

const resultado = conceito === "A" || conceito === "B" || conceito === "C" ? "APROVADO" : "REPROVADO"

console.log(`Suas notas foram ${nota1} e ${nota2}, sua média foi ${media}, o conceito correspondente é ${conceito} e você foi ${resultado}.`)
