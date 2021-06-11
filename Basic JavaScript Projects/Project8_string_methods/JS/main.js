function my_FullName() {
    var firstName = "Uriah ";
    var middleName = "Gabriel ";
    var lastName = "Kumangai";
    var fullName = firstName.concat(middleName, lastName);
    document.getElementById("Thisisanid").innerHTML = fullName;
} // Concatenates my full name using concat().

function cut_Function() {
    var mePhrase = "I ran to the store without my shoes.";
    var Section = mePhrase.slice(13,18);
    document.getElementById("Cut").innerHTML = Section;
} //slices out the word store from the sentence.

function upper_Method() {
    var Name = "uriah kumangai";
    var convert = Name.toUpperCase();
    document.getElementById("Upper").innerHTML = convert;
} //converts my name to all uppercase letters.

function search_Function() {
    var Sentence = "Where did Bob go from here?";
    var Located = Sentence.search("Bob");
    document.getElementById("foundHim").innerHTML = Located;
} // used search() to find bob in string.

function convert_Function() {
    var Y = 205;
    document.getElementById("Number").innerHTML = Y.toString();
}// Converts 205 to a string.

function Shrink_Function() {
    var G = 723.4534534534534534345;
    document.getElementById("shorten").innerHTML = G.toPrecision(7);
}// shrinks large number to 7 digit one.

function Fix_function() {
    var T = 53.32323;
    document.getElementById("fix").innerHTML = T.toFixed(3);
} // converts T to a string and lowers decimal numbers to 3 digits.

function value_Function() {
    var I = "Uriah Kumangai";
    document.getElementById("value").innerHTML = I.valueOf();
}//just returns the primitive value of the data. doesn't really do anything as JavaScript does this automatically per W3Schools.























