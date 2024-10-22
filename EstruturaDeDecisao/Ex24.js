// Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
// par ou ímpar;
// positivo ou negativo;
// inteiro ou decimal.

const prompt = require('readline-sync')

const operador = prompt.question("Digite qual operação deseja realizar: ")
const num1 = Number(prompt.question("Digite o primeiro número: "))
const num2 = Number(prompt.question("Digite o segundo número: "))
let numPosOperacao = 0

console.log(operacao(num1, num2, operador))

const parOuImpar = numPosOperacao % 2 === 0 ? "Par" : "Ímpar"
const inteiroOuDecimal = numPosOperacao.toString().includes('.') ? "Decimal" : "Inteiro"
const positivoOuNegativo = numPosOperacao > 0 ? "Positivo" : "Negativo"

console.log(`O resultado é ${parOuImpar}, ${inteiroOuDecimal} e ${positivoOuNegativo}`)

function operacao(num1, num2, operador) {
    switch (operador) {
        case "soma":
        case "+":
            numPosOperacao = Number(num1 + num2)
            break
        case "subtração":
        case "subtracao":
        case "-":
            numPosOperacao = Number(num1 - num2)
            break
        case "multiplicação":
        case "multiplicacao":
        case "*":
            numPosOperacao = Number(num1 * num2)
            break
        case "divisão":
        case "divisao":
        case "/":
            numPosOperacao = Number(num1 / num2)
            break
        default:
            console.log("Operação inválida.")
            return
    }

    return numPosOperacao.toFixed(2)
}