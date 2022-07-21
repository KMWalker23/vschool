const readline = require("readline-sync")
const operation = readline.question("Would you like to 'add', 'subtract', 'multiply', or 'divide'?: ")
const num1 = readline.question("Enter your first number: ")
const num2 = readline.question("Enter your second number: ")

if(operation === "add"){
    console.log(`The sum of your two numbers is: ${add(num1, num2) }`)
} else if(operation === "subtract"){
    console.log(`The difference of your two numbers is: ${subtract(num1, num2) }`)
} else if(operation === "multiply"){
    console.log(`The product of your two numbers is: ${multiply(num1, num2) }`)
} else if(operation === "divide"){
    console.log(`The quotient of your two numbers is: ${divide(num1, num2) }`)
}


function add(num1, num2){
    return Number(num1) + Number(num2)
}

function subtract(num1, num2){
    return Number(num1) - Number(num2)
}

function multiply(num1, num2){
    return Number(num1) * Number(num2)
}

function divide(num1, num2){
    return Number(num1) / Number(num2)
}


// const readline = require("readline-sync")
// //const readlineSync = require('readline-sync');
// //const name = readlineSync.question("What is your name?")
// const equation = ['add', 'subtract', 'divide', 'multiply'],
// const num1 = readlineSync.question("Enter the first number here")
// const num2 = readlineSync.question("Enter the second number here")

// //index = readlineSync.keyInSelect(equation, 'add');
// //console.log('Enter the first number here, ' + equation[index]+ 'Enter the second number here');//

// if(equation === 'add'){
//   console.log(`The sum of your two numbers is: ${add(num1,num2)}`)
// } else if(equation === 'subtract'){
//   console.log(`The result of your two numbers is: ${subtract(num1,num2)}`)
// }

// function add(num1,num2){
//   return Number(num1) + Number(num2)
// }


