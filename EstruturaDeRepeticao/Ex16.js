// A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa que gere a série até que o valor seja maior que 500.

let fibonacci = [0, 1]

for(let i = 2; ; i++) {
    let next = fibonacci[i - 1] + fibonacci[i - 2]

    if(next > 500) {
        break
    }

    fibonacci.push(next)
}

console.log(fibonacci)