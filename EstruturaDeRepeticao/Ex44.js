// Em uma eleição presidencial existem quatro candidatos. Os votos são informados por meio de código. Os códigos utilizados são
// 1 , 2, 3, 4  - Votos para os respectivos candidatos 
// (você deve montar a tabela ex: 1 - Jose/ 2- João/etc)
// 5 - Voto Nulo
// 6 - Voto em Branco
// Faça um programa que calcule e mostre:
// O total de votos para cada candidato;
// O total de votos nulos;
// O total de votos em branco;
// A percentagem de votos nulos sobre o total de votos;
// A percentagem de votos em branco sobre o total de votos.

const prompt = require('readline-sync')

const pessoas = Number(prompt.question("Quantas pessoas vão votar? "))
let voto

let candidatos = [
    {nome: "Felipe", votos: 0},
    {nome: "Joao", votos: 0},
    {nome: "Pedro", votos: 0},
    {nome: "Caio", votos: 0},
    {nome: "Nulo", votos: 0},
    {nome: "Branco", votos: 0}
]

function urna(voto, candidatos) {
    switch(voto) {
        case(1):
            candidatos[0].votos++
            break
        case(2):
            candidatos[1].votos++
            break
        case(3):
            candidatos[2].votos++
            break
        case(4):
            candidatos[3].votos++
            break
        case(5):
            candidatos[4].votos++
            break
        case(6):
            candidatos[5].votos++
            break
        default:
            console.log("Voto inválido, digite um número de 1 a 6.")
            return
    }
}

for(i = 0; i < pessoas; i++) {
    voto = Number(prompt.question("Qual candidato você deseja votar? (1 - Felipe), (2 - Joao), (3 - Pedro), (4 - Caio), (5 - Nulo), (6 - Branco) "))

    urna(voto, candidatos)
}

for(i = 0; i < candidatos.length; i++) {
    console.log(`${candidatos[i].nome}: ${candidatos[i].votos} votos.`)
}

let vencedor = ""
let maxVotos = 0;
for(i = 0; i < 4; i++) {
    if(candidatos[i].votos > maxVotos) {
        maxVotos = candidatos[i].votos
        vencedor = candidatos[i].nome
    }
}

const percentualNulos = (candidatos[4].votos / pessoas) * 100
const percentualBrancos = (candidatos[5].votos / pessoas) * 100

console.log(`O vencedor é ${vencedor}.`)
console.log(`O percentual de votos nulos é de ${percentualNulos.toFixed(2)}%.`)
console.log(`O percentual de votos brancos é de ${percentualBrancos.toFixed(2)}%.`)