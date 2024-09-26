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
// this