// As the name implies, it refers to the type of our variables
// Javascript has the Number (with or without decimal), Boolean,
// String, Boolean, Arrays, Objects Data types

// We can also add a number to a string
firstname = "Assurance"
lastname = "Ikogwe"
username = firstname +  202
// Js sees this as firstname + "202"
console.log(username)

// We have what we call undefined
// Which means the variable doesn't have a type
// Js is dynamic
// So we mean the value given to the variable is 
// what determines it's type
// If the variable has no value, it has no type and it is undefined

let x // undefined
x = 53 // Number
x = 67.83838 // Number
x = "Hi" // String
x = '' // Empty, String
x = true // Boolean
x = false // Boolean
x = [1, 2, 5] // Arrays are treated as object in JS
x = {firstname: "Assurance", lastname:"Ikogwe"} // Object
console.log(typeof(x))