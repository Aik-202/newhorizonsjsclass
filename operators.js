// What is an operator?
// It's what allows an operation to be performed

3 + 5 // addition operation

// + => addition operator
// = => assignment operators

x = 2 + 5
// x is assigned to the value of 2 + 5

// * => Multiplication
// - => Subtraction

// Types of operator

// Arithmetic Operators

// There are operators that are used to perform 
// our basic arithmetic

//+ => addition operator 
3 + 5

// * => Multiplication
3 * 5

// - => Subtraction
3 -5 

// / => Division
3 / 5

// ++ => Increment, adding 1
x = 3
x++
z = x
console.log(z)

// ++ => Decrement, subtracting 1
x = 3
x--
y = x
console.log(y)

// % => Modulus, gives the remainder after division
x =  20 % 3
console.log(x)


// Assignment Operators

// = => assignment operators
x = 2 + 5
// x is assigned to the value of 2 + 5

// += => adds a value to the variable
x = 2
x += 5
console.log(x)

// -= => subtracts a value from the variable
x = 2
x -= 5
console.log(x)

// we also have /=, *=, %=
x = 5
x %= 3
console.log(x)

// Exponential **=
x = 2
x **= 3
console.log(x)

// Comparison Operators
// We have ==, ===, !=, !==, >, <, >=, <=, ?

// == they are equal, returns either true or false
x = 5, y = 4
console.log(x == y)

// === strict equality, checks if the value and the type are equal

// != not equal
console.log(x != y)

// !== strict version

// > greater than
// < less than
// >= greater or equal
// <= less than or equal

// ? tenaray operator is the short version of the if else
if (x >= 5) {
    console.log('yes')
} else {
    console.log('no')
}

x >= 5 ? console.log('yes') : console.log('no')

// Logical Operators, used for testing 
// and comparison of two or more expressions

// && , Logical AND
// if expr1 is true and expr2 is true returns true
// but if one of them is false, it will retrun false

x = 5, y = 10, z = 105, k = 22

expr1 = x > y // false
expr2 = z > k // true

console.log(expr1 && expr2)


// ||, Logical OR
// if expr1 at least one is true, it returns true
console.log(expr1 || expr2)

// !, Logical NOT
// it negates the expression
console.log(!expr1)

// Relational Operators
// Bitwise Operators

// String Operations
// We can add a string to a string, 
// we call it concatenation

firstname = "Assurance"
lastname = "Ikogwe"
fullname= firstname + ' ' + lastname
console.log(fullname)

// We can also add a number to a string

firstname = "Assurance"
lastname = "Ikogwe"
username = firstname +  202
console.log(username)