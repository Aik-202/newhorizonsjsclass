// Loops

// A Loop in programming is used to repeatedly execute
// some lines of code.

car = []
// car[0] = 'BMW1'
// car[1] = 'BMW2'
// car[2] = 'BMW3'
// car[3] = 'BMW4'

// Instead of repeated codes as in the above, a loop 
// will enable us to input each element in one line

// properties of a loop

// - A loop has a counter (the variable that keeps count of how 
// many times the loop has ran)

// - A loop has a condition (determines when the loop starts
// and when the loop will end)

// - A loop has a step (that is incharge of increaing the value 
// of the counter)

// For loop
// Usually used for Array
// syntax of for loop
// for (let i = 0; condition, step) {
    // code to be repeated
// }

for (let i = 0; i < 4; i++){
    plus1 = i +  1
    car[i] = 'BMW' + plus1
}

console.log(car)

// For in
// loops through the properties of an object