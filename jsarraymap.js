// Map Function allows us to perform opertions
// on the elements of an array without using loops 

const no1  = [45, 4, 9, 16, 23, 67, 90]

// it takes in 3 parameter
// element (item)
// array index (index)
// array

// Lets multiply every element by 3s
no1.map((item, index, no1) => {
    console.log(item) // prints out all our elements
    console.log(no1[index]) // prints out our items
})

// filter
// it creates a new array that satisfies a condition
over16 = no1.filter( (val) => {
    return val > 16
})

console.log(over16)

// reduce
// it runs a function on an array to produce a 
// single value
// it can take in
// value => element
// index
// array
// total =>  previous value returned, it starts as 0

// no1  = [45, 4, 9, 16, 23, 67, 90]

let sum = no1.reduce( (total, value) => {
    return total + value
})

console.log(sum)