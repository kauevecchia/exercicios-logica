// Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// Desconto do IR:
// Salário Bruto até 900 (inclusive) - isento
// Salário Bruto até 1500 (inclusive) - desconto de 5%
// Salário Bruto até 2500 (inclusive) - desconto de 10%
// Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.

const prompt = require('readline-sync')
const valorHora = Number(prompt.question("Quanto você ganha por hora: "))
const horasTrabalhadas = Number(prompt.question("Quantas horas você trabalha no mês: "))
const sindicato = 0.03
let ir

const salario = valorHora * horasTrabalhadas

if(salario <= 1500) {
    ir = 0.05
} else if(salario <= 2500) {
    ir = 0.1
} else if(salario > 2500) {
    ir = 0.2
}

const desconto = salario * (sindicato + ir)
const salarioLiquido = salario - desconto

console.log(`Salário Bruto: R$${salario}.`)
console.log(`Total de Descontos: R$${desconto}`)
console.log(`Salário Líquido: R$${salarioLiquido}`)

