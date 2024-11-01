// A company asked you to create a program that reads an employee name and salary and store them into proper lists.The number of employees is unknown. To exit the program the user must input "quit". Before exit find the average salary and for each employee print if their salary is above or below average salary.

// Create a program that:

// Reads employee name and salary, store them into different lists
// Asks the user to continue
// If the user wants to exit the program find the average salary and for each employee print if is above or below average salary
// Input: [Mary, John, George, Nicole], [2343, 2134, 5342, 5342]
// Output: "The average salary is 3790.25$", "Mary's salary is below average","John's salary is below average","George's salary is above average","Nicole's salary is above average"

const prompt = require('readline-sync')

let employees = []
let salaries = []

while(true) {
    const employee = prompt.question("Qual seu nome? ")
    const salary = Number(prompt.question("Qual é seu salário? "))
    employees.push(employee)
    salaries.push(salary)

    let quit = prompt.question("Você quer encerrar? (sim/nao) ")
    while(quit !== "sim" && quit !== "nao") {
        quit = prompt.question("Resposta inválida, responda (sim) ou (nao) ")
    }

    if(quit == "sim") {
        let totalSalaries = 0
        for(i = 0; i < salaries.length; i++) {
            totalSalaries += salaries[i]
        }
        const average = totalSalaries / salaries.length
        console.log(`A média salarial é de R$${average.toFixed(2)}.`)

        for(i = 0; i < salaries.length; i++) {
            if(salaries[i] > average) {
                console.log(`O salário de ${employees[i]} é acima da média salarial.`)
            } else {
                console.log(`O salário de ${employees[i]} é abaixo da média salarial.`)
            }
        }

        break
    }
}