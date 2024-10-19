// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
// 1. salário bruto.
// 2. quanto pagou ao INSS.
// 3. quanto pagou ao sindicato.
// 4. o salário líquido.

const prompt = require('readline-sync')

const valorHora = Number(prompt.question("Quanto você ganha por hora: "))
const horasTrabalhadas = Number(prompt.question("Quantas horas você trabalha por mês: "))
const salarioMensal = Number(valorHora * horasTrabalhadas)

function salarioLiquido () {
    return Number(salarioMensal - ((salarioMensal * 0.11) + (salarioMensal * 0.08) + (salarioMensal * 0.05)))
}


console.log(`Seu salário líquido é de R$${salarioLiquido()}.`)