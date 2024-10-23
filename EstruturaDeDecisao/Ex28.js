// O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
//                       Até 5 Kg           Acima de 5 Kg
// File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
// Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
// Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg
// Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total da compra. Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

const prompt = require('readline-sync')

const carne = prompt.question("Qual carne você deseja comprar? (file duplo / alcatra / picanha) ").toLowerCase()
const peso = Number(prompt.question(`Quantos kg de ${carne} você quer comprar? `))
const cartao = prompt.question("Você vai comprar pelo cartão Tabajara? (sim/não): ").toLowerCase()

function cupomFiscal() {
    let preco

    switch(carne) {
        case "file duplo":
            preco = peso > 5 ? (5.8 * peso) : (4.9 * peso)
            break
        case "alcatra":
            preco = peso > 5 ? (6.8 * peso) : (5.9 * peso)
            break
        case "picanha":
            preco = peso > 5 ? (7.8 * peso) : (6.9 * peso)
            break
        default:
            console.log("Tipo de carne inválida.")
            return
    }

    const desconto = cartao === "sim" ? preco * 0.05 : 0
    const precoFinal = (preco - desconto).toFixed(2)
    const pagamento = cartao === "sim" ? "Cartão Tabajara" : "Dinheiro"
    console.log(`Carne: ${carne}, Peso: ${peso}, Preço Total: R$${preco.toFixed(2)}, Tipo de pagamento: ${pagamento}, Valor do Desconto: ${desconto.toFixed(2)}, Valor a Pagar: R$${precoFinal}`)
}

cupomFiscal()