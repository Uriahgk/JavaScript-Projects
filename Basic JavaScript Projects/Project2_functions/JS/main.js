function My_First_Function() {
    var str = "This text is blue!";
    var result = str.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML = result;
} // the function above causes "This text is blue" to display when the button is pressed.

function boop_Change() {
    var doopy = "Boopy Doopy";
    doopy += " Doopy Boop";
    document.getElementById("boop").innerHTML = doopy;
} // this function concatenates Boopy Doopy and Doopy Boop into one string and displays it when the <p> element is clicked on.

function red_Text() {
    var red = "Click me to see me change!";
    red = red.fontcolor("red");
    document.getElementById("blackToRed").innerHTML = red;
}