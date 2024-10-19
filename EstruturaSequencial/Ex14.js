// João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.

const prompt = require('readline-sync')

const peso = Number(prompt.question("Peso de peixes: "))
if (peso > 50) {
    const excesso = peso - 50
    const multa = excesso * 4
    console.log(`Peso maior que o estabelecido, multado em R$${multa}.`)
} else {
    console.log("Peso de peixes dentro do estabelecido pelo regulamento.")
}