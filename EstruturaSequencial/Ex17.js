// Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
// Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
// - comprar apenas latas de 18 litros;
// - comprar apenas galões de 3,6 litros;
// - misturar latas e galões, de forma que o desperdício de tinta seja menor. Acrescente 10% de folga e sempre arredonde os valores para cima isto é, considere latas cheias.

const prompt = require('readline-sync')

const area = Number(prompt.question("Área a ser pintada: "))
const recipiente = Number(prompt.question("Qual recipiente deseja comprar? Lata (1), Galão (2), ou Lata e Galão (3)"))
const lata = {
    valor: 80,
    litros: 18,
    get coberturaPorLata() {
        return 6 * this.litros
    }
}

const galao = {
    valor: 25,
    litros: 3.6,
    get coberturaPorGalao() {
        return 6 * this.litros
    }
}

const galaoELata = {
    valor: lata.valor + galao.valor,
    litros: lata.litros + galao.litros,
    get coberturaPorGalaoELata() {
        return 6 * this.litros
    }
}

const comprar = calcula(recipiente)
let valorFinal

if(recipiente === 1) {
    valorFinal = Number(comprar * lata.valor)
} else if(recipiente === 2) {
    valorFinal = comprar * galao.valor
} else if (recipiente === 3) {
    valorFinal = comprar * galaoELata.valor
} else {
    return undefined
}

function calcula(recipiente) {
    if(recipiente === 1) {
        return Math.ceil(area / lata.coberturaPorLata)
    } else if (recipiente === 2) {
        return Math.ceil(area / galao.coberturaPorGalao)
    } else if (recipiente === 3) {
        return Math.ceil(area / galaoELata.coberturaPorGalaoELata)
    } else {
        return undefined
    }
}

console.log(`Você vai ter que comprar ${comprar} do(s) recipiente(s) escolhido(s), no valor total de R$${valorFinal}`)

