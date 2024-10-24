// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

const prompt = require('readline-sync')

let usuario = prompt.question("Digite o nome de usuário: ")
let senha = prompt.question("Digite a senha: ")

while(senha === usuario) {
    console.log("A senha não pode ser igual ao seu nome de usuário. Tente novamente.")
    usuario = prompt.question("Digite o nome de usuário: ")
    senha = prompt.question("Digite a senha: ")
}

console.log("Usuário e senha cadastrados com sucesso.")