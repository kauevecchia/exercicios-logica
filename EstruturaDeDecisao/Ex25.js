// Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// "Telefonou para a vítima?"
// "Esteve no local do crime?"
// "Mora perto da vítima?"
// "Devia para a vítima?"
// "Já trabalhou com a vítima?" O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

const prompt = require('readline-sync')

const question1 = prompt.question("Telefonou para a vítima?(sim/não): ").toLowerCase()
const question2 = prompt.question("Esteve no local do crime?(sim/não): ").toLowerCase()
const question3 = prompt.question("Mora perto da vítima?(sim/não): ").toLowerCase()
const question4 = prompt.question("Devia para a vítima?(sim/não): ").toLowerCase()
const question5 = prompt.question("Já trabalhou com a vítima?(sim/não): ").toLowerCase()

let classificacao

const respostas = [question1, question2, question3, question4, question5]
classifica(respostas)

function classifica(respostas) {
    let count = 0
    respostas.forEach(function(resposta) {
        if (resposta === "sim") count++
        return count
    })
        
    switch(count) {
        case 2:
            classificacao = "Suspeita"
            break
        case 3:
        case 4:
            classificacao = "Cúmplice"
            break
        case 5:
            classificacao = "Assassina"
            break
        default:
            classificacao = "Inocente"
    }

    return classificacao
}

console.log(`A pessoa é ${classificacao}`)