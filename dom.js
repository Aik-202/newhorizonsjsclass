/*Javascript with the DOM

DOM stands for Document Object Model

DOM is a tree representation of our HTML document, 
making it easy for programming languages 
like Javascript to make changes on the document

Javscript can change the text, the css, atrributes
*/

/* Javascript changing text
These changes do not just occur, 
they occur when something happens, 
this is what we know as events 
e.g when a button is clicked,
when the moves over an element 

We use Javascript functions to attach 
changes when these events occurs 
*/

// How to get a document element
paragraph = document.getElementById("text")
hidebutton = document.getElementById("hidebutton")
showbutton = document.getElementById("showbutton")


// Keyword function, name of the function, (), {}
function hideText () {
    //console.log(paragraph) // alert box

    paragraph.innerHTML = "" // changes the text in the html element
    
    // Javascript can also make changes to the css
    // To change you start with style followed by css property
    hidebutton.style.display = "none"

    showbutton.style.display = "block"
}

function showText () {
    paragraph.innerHTML= "Text disappears based on button"
    showbutton.style.display ="none"
    hidebutton.style.display = "block"
}

light = document.getElementById("light")
nolight = document.getElementById("nolight")

switchOnButton = document.getElementById("switchOnButton")
switchOffButton = document.getElementById("switchOffButton")

function switchOnLight () {
    light.style.display = "inline"
    nolight.style.display = "none"

    switchOnButton.style.display = "none"
    switchOffButton.style.display = "inline"
}

function switchOffLight () {
    light.style.display = "none"
    nolight.style.display = "inline"

    switchOnButton.style.display = "inline"
    switchOffButton.style.display = "none"
}