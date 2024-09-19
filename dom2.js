// Javascript doesn't just affect 
// the css of an element, it can also change 
// it's attributes

light = document.getElementById("light");
nolight = document.getElementById("nolight");

switchOnButton = document.getElementById("switchOnButton");
switchOffButton = document.getElementById("switchOffButton");

function switchOnLight () {
    nolight.setAttribute("src", "light.png")
    switchOnButton.innerHTML = "Light Off"
}