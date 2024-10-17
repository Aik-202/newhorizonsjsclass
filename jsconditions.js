// Conditional statements are used to perform different
// actions based on different conditions

// the actions are defined in a block, represented with {}

// How to do we create these conditions
// We can create them using any operator that returns
// a Boolean value

// We have the:

// Comparison Operators
// We have ==, ===, !=, !==, >, <, >=, <=, ?


// Logical Operators, used for testing 
// and comparison of two or more expressions

// && , Logical AND
// if expr1 is true and expr2 is true returns true
// but if one of them is false, it will return false

// the conditions appear in ()

// Js provides us with different conditional statements namely:
// if
// if else
// else if
// switch

// if statement
// syntax(language):
// if (condition) {
      //action
// }

// hour = 11

// if (hour > 11 ) {
//     console.log('The 11th hour miracle has passed')
// }

// if else statement
// the else part is what happens when the condition 
// is false
// syntax(language):
// if (condition) {
      // action
// } else {
      // another action
// }

// if (hour > 11 ) {
//     console.log('The 11th hour miracle has passed')
// } else {
//     console.log('The 11th hour miracle is yet to happen')
// }

// else if
// this is used when you hav a case of multiple conditions
// it must end at else

// syntax(language):
// if (condition) {
      // action
// }
// else if (condition) {
    // action
// } 
// else {
      // another action
// }

// if (hour > 11 ) {
//     console.log('The 11th hour miracle has passed')
// } else if (hour == 11) {
//     console.log('The 11th hour miracle is happening')
// } else {
//     console.log('The 11th hour miracle is yet to happen')
// }

// Switch Statement
// It is another way of writing else if
// we are performing different actions based 
// on different conditions 

// syntax(language):
// switch (expression) {
//     case x: 
//     // block
//     break; // exit
//     case y:
//     // block
//     break;
//     default:
//     // block
// } 

// With this the expression is not necessarily boolean, it has a value

// x, y are the possible value of the expression

// defualt is what happens when none of the conditions are true

hour = 26

switch (true) {
    case hour > 11:
     console.log('The 11th hour miracle has passed') 
    break;
    case hour == 11:
        console.log('The 11th hour miracle is happening')
    break;
    default:
        console.log('The 11th hour miracle is yet to happen')
}

// Class-Exercise one
// In EKSU grading system
// grade can be A, B, C, D, E, F
// Using the case print out the following
// for A => Excellent
// B => Very Good
// C => Good
// D => Fair
// E => Poor
// F => Fail
const grade = 'A'

switch (grade) {
    case 'A':
     console.log('Excellent') 
    break;
    case 'B':
        console.log('Very Goood')
    break;
    case 'C':
        console.log('Good')
    break;
    case 'D':
        console.log('Fair')
    break;
    case 'E':
        console.log('Poor')
    break;
    case 'F':
        console.log('Fail')
    break;
    default:
        console.log('Not a grade')
}

// Class-Exercise two
// In EKSU grading system
// grade can be A, B, C, D, E, F
// Using the case print out the following
// for 70 - 100 => A
// 60 - 69 => B
// 50 - 59 => C
// 40 - 49 => D
// 30 - 39 => E
// 0 - 29 => F
const grade2 = -12

switch (true) {
    case (grade2 >= 70):
        console.log('The grade is A')
    break;
    case (grade2 <= 69 && grade2 >= 60):
        console.log('The grade is B')
    break;
    case (grade2 <= 59 && grade2 >= 50):
        console.log('The grade is C')
    break;
    case (grade2 <= 49 && grade2 >= 40):
        console.log('The grade is D')
    break;
    case (grade2 <= 39 && grade2 >= 30):
        console.log('The grade is E')
    break;
    case (grade2 <= 29  && grade2 >= 0):
        console.log('The grade is F')
    break;
    default:
        console.log('Not a grade')
}