// A company asked you to create a program that reads an employee name and salary and store them into proper lists.The number of employees is unknown. To exit the program the user must input "quit". Before the exit find the employees with the maximum salary and print who they are.

// Create a program that:

// Reads employee name and salary, store them into different lists
// Asks the user to continue
// If the user wants to exit the program find and print the employees with maximum salary
// Input: [Mary, John, George, Nicole], [2343, 2134, 5342, 5342]
// Output: George - 5342, Nicole - 5432
// Notice that we have to find the maximum salary and then compare the salaries in case someone has the exactly same salary with someone else.

const prompt = require('readline-sync')

let names = []
let salaries = []

while(true) {
    let name = prompt.question("Qual é o seu nome? ")
    let salary = Number(prompt.question("Qual é o seu salário? "))

    names.push(name)
    salaries.push(salary)

    let quit = prompt.question("Você quer encerrar? (sim/nao) ")
    while(quit !== "sim" && quit !== "nao") {
        quit = prompt.question("Resposta inválida, responda (sim) ou (nao): ")
    }

    if(quit == "sim") {
        const maximumSalary = Math.max(...salaries)
        const employeesWithMaxSalary = []

        for(i = 0; i < salaries.length; i++) {
            if(salaries[i] === maximumSalary) {
                employeesWithMaxSalary.push(`${names[i]} - R$${salaries[i]}`)
            }
        }

        console.log("Funcionários com o salário máximo: ")
        console.log(employeesWithMaxSalary.join(", "))
 
        break
    }
    
}


