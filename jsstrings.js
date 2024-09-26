// Js strings are used for storing 
// and manipulating text
// They appear in single ('') or double quotes("")

let text = "New Horizons"

// String Length 
// there is a built-in function know as length() 
// for checking the length of a string
// it counts the spacing in the string as well

console.log(text.length)

// Escape characters
let text2 = "New Horizons\n Bus is at the station"
// New Horizons' Bus is at the station

console.log(text2)

// Other escape characters
/*
\b => backspace
\f => Form Feed
\n => New Line
\r => Carriage Return
\t => Horizontal Tab
\v => Vertical Tab

*/

// Strings can be objects
x = new String ('Abba')

// String Methods
// length() is a string mewthod that gives
// the length of a string
let text3 = "New Horizons"
console.log(text3.length)

// EXtracting the parts of a string
// There are 3 methods that allows us do this
// - slice()
// - substring()
// - substr()

// The Slice Method
// extracts part of the string, and returns 
// the extracted part
let fullname = "Assurance Ikogwe"
// I want just the lastname 

// slice(start, end)
// js starts from 0 in counting
// start means the starting index
// end means the ending index

lastname =  fullname.slice(9, 16)

console.log(lastname)

// Exercise
// Extract firstname using positive amd negative

// Using Negative
// we can have just a starting value 
// if we've exceeded the numbers
lastname =  fullname.slice(-14, -7)
console.log(lastname)

// substring()
// this is just like the slice but it doesn't 
// take negatives
lastname =  fullname.substring(9, 16)
console.log(lastname)

//substr()
// it's similar to the slice in the sense that:
// start means the starting index
// but
// end means the length of the extracted string
fullname = "Assurance Ikogwedffgff"
lastname = fullname.substr(9, 13) 
console.log(lastname)
// Can also take negative

// Replacing string content
// We use the replace() method

text = "Noow Horizons"

// We want to replace Noow with New
// first "" => What do you want to replace
// second "" => With what?
correct = text.replace("Noow", "New")

console.log(correct)

// Converting to upper and lowercase
console.log(correct.toUpperCase()) // converts to upper case
console.log(correct.toLowerCase()) // converts to upper case

// Exercise 2
// Number 5 under task 2 of the Algorithm challenge