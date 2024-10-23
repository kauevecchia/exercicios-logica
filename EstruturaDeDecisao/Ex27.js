// Uma fruteira está vendendo frutas com a seguinte tabela de preços:
//                       Até 5 Kg           Acima de 5 Kg
// Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
// Maçã            R$ 1,80 por Kg          R$ 1,50 por Kg
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

const prompt = require('readline-sync')

const fruta = prompt.question("Qual fruta você deseja comprar? (Morango ou Maçã) ").toLowerCase()
const peso = Number(prompt.question("Quantos Kg dessa fruta você deseja comprar? "))
let preco

calcular()

function calcular() {
    switch(fruta) {
        case "morango":
            preco = peso > 5 ? (2.2 * peso) : (2.5 * peso)
            break
        case "maçã":
        case "maça":
        case "maca":
            preco = peso > 5 ? (1.5 * peso) : (1.8 * peso)
            break
        default:
            console.log('Fruta inválida, insira "maçã" ou "morango".')
            return
    }

    const precoFinal = preco > 25 || peso > 8 ? preco - (preco * 0.1) : preco
    console.log(`Você comprou ${peso}kg de ${fruta} no valor R$${precoFinal}.`)
}  

