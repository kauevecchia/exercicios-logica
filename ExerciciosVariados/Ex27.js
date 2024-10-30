// Create a program that register a user with a username and a password. Then the user will try to login with the login credentials. If the user make 3 wrong attempts exit program with proper message.

// Create a program that:

// Reads the username and the password
// Then the user try to login
// If the user makes 3 wrong attempts exit with proper message:

const prompt = require('readline-sync')

const username = prompt.question("Enter your username: ")
const password = prompt.question("Enter your password: ")
let wrong = 1

const loginUsername = prompt.question("Enter your username: ")
if(loginUsername == username) {
    let loginPassword = prompt.question("Enter your password: ")
    while(loginPassword !== password) {
        loginPassword = prompt.question("Enter your password: ")
        wrong++

        if(wrong > 2) {
            console.log("You made 3 wrong attempts, try again later. ")
            return
        }
    }
} else {
    console.log("Username dont exist, try again. ")
}


    


