// Em uma competição de salto em distância cada atleta tem direito a cinco saltos. No final da série de saltos de cada atleta, o melhor e o pior resultados são eliminados. O seu resultado fica sendo a média dos três valores restantes. Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e depois informe a média dos saltos conforme a descrição acima informada (retirar o melhor e o pior salto e depois calcular a média). Faça uso de uma lista para armazenar os saltos. Os saltos são informados na ordem da execução, portanto não são ordenados. O programa deve ser encerrado quando não for informado o nome do atleta. A saída do programa deve ser conforme o exemplo abaixo:
// Atleta: Rodrigo Curvêllo

// Primeiro Salto: 6.5 m
// Segundo Salto: 6.1 m
// Terceiro Salto: 6.2 m
// Quarto Salto: 5.4 m
// Quinto Salto: 5.3 m

// Melhor salto:  6.5 m
// Pior salto: 5.3 m
// Média dos demais saltos: 5.9 m

// Resultado final:
// Rodrigo Curvêllo: 5.9 m

const prompt = require('readline-sync')

const atleta = prompt.question("Qual o nome do atleta? ")
let saltos = []
let media = 0
let salto
let resto = 0

if(atleta === undefined) {
    return
}

for(i = 0; i < 5; i++) {
    salto = saltos.push(Number(prompt.question(`Insira a altura do ${i + 1}° salto: `)))
}

console.log(atleta)
console.log(`Primeiro salto: ${saltos[0]}`)
console.log(`Segundo salto: ${saltos[1]}`)
console.log(`Terceiro salto: ${saltos[2]}`)
console.log(`Quarto salto: ${saltos[3]}`)
console.log(`Quinto salto: ${saltos[4]}`)

function selectionSort(saltos) {
    for(i = 0; i < saltos.length; i++) {
        let min = i
        for(j = i + 1; j < saltos.length; j++) {
            if(saltos[j] < saltos[min]) {
                min = j
            }
        }

        if(min !== i) {
            const temp = saltos[min]
            saltos[min] = saltos[i]
            saltos[i] = temp
        }
    }

    return saltos
}

selectionSort(saltos)


console.log(`Melhor salto: ${saltos[4]}`)
console.log(`Pior salto: ${saltos[0]}`)

saltos.shift()
saltos.pop()

for(i = 0; i < saltos.length; i++) {
    resto += saltos[i]
}

media = resto / 3

console.log(`Média dos demais saltos: ${media}`)
console.log(`Resultado final: ${atleta}: ${media}`)

