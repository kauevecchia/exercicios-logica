// Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulta ou idosa, conforme a média calculada.

const prompt = require('readline-sync')

const pessoas = Number(prompt.question("Você quer que calcule a idade de quantas pessoas? "))
let idades = []
let soma = 0

for(i = 0; i < pessoas; i++) {
    idades.push(Number(prompt.question(`Quantos anos a pessoa ${i + 1} tem? `)))
}

for(i = 0; i < idades.length; i++) {
    soma += idades[i]
}

const media = Number(soma / pessoas)

function classificar(media) {
    switch(true) {
        case(media >= 0 && media <= 25):
            return "Jovem"
        case(media >= 26 && media <= 60):
            return "Adulta"
        case(media > 60):
            return "Idosa"
        default:
            return "Idades inválidas."
    }
}


console.log(`A turma é ${classificar(media)}`)

