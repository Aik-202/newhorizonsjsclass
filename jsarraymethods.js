// Converting Arrays to Strings
// We use the toString Method

let car = ["bmw", "toyota", "Volvo"]
console.log(car.toString())

//join()
// converts to string, but now we 
// get to specify what seperates the strings
console.log(car.join(', '))

// Pushing Popping
// while .push() adds the item to 
// the back of the arrays
// .pop deletes the item at the back 
// of the array
car.push('Tortise') // adds Tortise to the back
car.pop() // remove the last item of the array
console.log(car)

//shift()
// removes the first item
car.shift()
car.shift()
console.log(car)

//unshift()
// adds an item at the beginning
car.unshift('bmw', 'toyota')
console.log(car)

// splice(x, y)
// x where should the items be added
//y how many items should be deleted
car = ["bmw", "toyota", "Volvo"]

// add Tortise, remove bmw
car.splice(2, 2, 'Tortise')
console.log(car)

// Algorithm challenge
/*
The challenge states:

Instructions

Copy the uncorrupted data in the 
array stored in targetDisk to the 
empty array newDisk (corrupted data 
looks like this: ø). 
Then print the contents of the 
disk to the terminal as a string.

var targetDisk = [ 'E', 'ø', '-', 'C', 'ø', 'o', 'r', 'ø', 'ø', 'p', '\'', 'ø', 's', ' ', 'E', 'v', 'ø', 'i', 'ø', 'ø', 'l'];
var newDisk = [];
var corruptionSymbol = 'ø';
*/

var targetDisk = [ 'E', 'ø', '-', 'C', 'ø', 'o', 'r', 'ø', 'ø', 'p', '\'', 'ø', 's', ' ', 'E', 'v', 'ø', 'i', 'ø', 'ø', 'l'];
var newDisk = [];
var corruptionSymbol = 'ø';