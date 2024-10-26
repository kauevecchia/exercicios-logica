// Desenvolva um programa que faça a tabuada de um número qualquer inteiro que será digitado pelo usuário, mas a tabuada não deve necessariamente iniciar em 1 e terminar em 10, o valor inicial e final devem ser informados também pelo usuário, conforme exemplo abaixo:
// Obs: Você deve verificar se o usuário não digitou o final menor que o inicial.

const prompt = require('readline-sync')

const numero = Number(prompt.question("Você quer a tabuada de qual número? "))
const valorInicial = Number(prompt.question("Você quer que inicie a tabuada em qual número? "))
const valorFinal = Number(prompt.question("Você quer que acabe a tabuada em qual número? "))

if(valorFinal < valorInicial) {
    console.log("Digite o valor final maior que o valor inicial.")
    return 1
}

for(i = valorInicial; i <= valorFinal; i++) {
    let resultado = numero * i
    console.log(`${numero} X ${i} = ${resultado}`)
}