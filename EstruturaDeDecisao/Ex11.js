// As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// - salários até R$ 280,00 (incluindo) : aumento de 20%
// - salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// - salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// - salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
// - o salário antes do reajuste;
// - o percentual de aumento aplicado;
// - o valor do aumento;
// - o novo salário, após o aumento.

const prompt = require('readline-sync')
const salario = Number(prompt.question("Insira seu salário: "))
let percentual = 0

if(salario <= 280) {
    percentual = 0.2
} else if(salario >= 280 && salario <= 700) {
    percentual = 0.15
} else if(salario <= 700 && salario <= 1500) {
    percentual = 0.1
} else if(salario > 1500) {
    percentual = 0.05
}

const aumento = salario * percentual
const novoSalario = salario + aumento
 
console.log(`O seu salário antes do reajuste era de ${salario}, e foi aumentado em ${percentual * 100}%, resultando em um aumento de R$${aumento},  agora seu novo salário é de ${novoSalario}`)