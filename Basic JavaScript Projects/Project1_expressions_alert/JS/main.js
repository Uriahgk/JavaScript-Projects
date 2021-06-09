document.write ("Hello, World!"); //writes the string on the page

var U = "Uriah"; //gave the variable U the value of Uriah

document.write(U); //this will write Uriah on the page

window.alert(U); //this makes a pop up window that displays Uriah

document.write ("As I ran down the stairs, Bob yelled, \"Watch out! Don\'t trip!\""); //this is allowing me to write quotations on the page

document.write ("John ran down the stairs to the door," + " opened it, and ran outside."); //this is concatenating two strings

var K = "Uriah" + " Kumangai"; // this is concatenating two values and giving them to the variable K
document.write(K); //this writes out the var K onto the page

var personA = "Bob", personB = "Joe", personC = "Tom", personD = "Jerry"; //this is assigning multiple variables a value all in one line
var personA = personA.fontcolor("blue");
var personB = personB.fontcolor("red");
var personC = personC.fontcolor("yellow");
var personD = personD.fontcolor("green"); // this is changing the font color of all those variables 
document.write(personA);
document.write(personB);
document.write(personC);
document.write(personD); // these are printing all said variables onto the page

document.write(4+4); // this is a statement with an expression. it's adding 4 and 4 and will show 8 on the page.

function surpriseChange () {
    document.getElementById("alter").innerHTML= ("SURPRISE!!"); //Event onMouseOver to change the <p> element
                                                                // to SURPRISE!!
}