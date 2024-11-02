// You have these lists of empoyees and their salaries: names[Mary, John, George, Nicole, Nick, Jim, Jack, Johanna], salaries[32343, 12134, 25342, 35342, 42343, 32134, 15342, 25342]

// Create a program that:

// Orders the salaries by biggest salary first
// Prints all employees in order by lowest salary first


const names = ["Mary", "John", "George", "Nicole", "Nick", "Jim", "Jack", "Johanna"];
const salaries = [32343, 12134, 25342, 35342, 42343, 32134, 15342, 25342];

// Combine names and salaries into a list of objects
const employees = names.map((name, index) => ({
  name: name,
  salary: salaries[index]
}))

// Sort employees by salary in descending order
const sortedBySalaryDesc = [...employees].sort((a, b) => b.salary - a.salary)
console.log("Salaries sorted by biggest salary first:")
sortedBySalaryDesc.forEach(emp => console.log(`${emp.name}: ${emp.salary}`))

// Sort employees by salary in ascending order
const sortedBySalaryAsc = [...employees].sort((a, b) => a.salary - b.salary)
console.log("Employees sorted by lowest salary first:")
sortedBySalaryAsc.forEach(emp => console.log(`${emp.name}: ${emp.salary}`))
