// Um posto está vendendo combustíveis com a seguinte tabela de descontos:
// Álcool:
// até 20 litros, desconto de 3% por litro
// acima de 20 litros, desconto de 5% por litro
// Gasolina:
// até 20 litros, desconto de 4% por litro
// acima de 20 litros, desconto de 6% por litro 
// Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.

const prompt = require('readline-sync')

const combustivel = prompt.question("Qual combustível você deseja? Gasolina(G) ou Álcool(A): ").toUpperCase()
const litros = Number(prompt.question("Quantos litros de combustível você deseja? "))
let preco


calcular(litros, combustivel)

function calcular(litros, combustivel) {
    switch(combustivel) {
        case "G":
            preco = litros > 20 ? (2.5 * litros) - (0.6 * litros) : (2.5 * litros) - (0.04 * litros)
            break
        case "A":
            preco = litros > 20 ? (1.9 * litros) - (0.5 * litros) : (1.9 * litros) - (0.03 * litros)
            break
        default:
            console.log('Combustível inválido, insira "G" ou "A".')
            return
    }
    return preco
}

console.log(`O tipo de combustível selecionado foi ${combustivel} e o valor a ser pago é ${preco.toFixed(2)}.`)

