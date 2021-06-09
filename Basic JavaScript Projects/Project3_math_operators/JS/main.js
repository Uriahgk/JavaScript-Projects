function do_Addition() {
    var add = 5 + 6;
    document.getElementById("Math").innerHTML = "5 + 6 = " + add; 
} // this adds 5 to 6 and displays this with the answer after being clicked on.

function do_Subtraction() {
    var sub = 11 - 6;
    document.getElementById("Subtract").innerHTML = "11 - 6 = " + sub;
} // this subtracts 6 from 11 and displays the result when the <p> is hovered over.

function do_Multiplication() {
    var times = 5 * 10;
    document.getElementById("Multiply").innerHTML = "5 x 10 = " + times;
} // multiplies 5 by 10 when clicked on.

function do_Division() {
    var div = 100 / 10;
    document.getElementById("Divide").innerHTML = "100 / 10 = " + div;
} // divides 100 by 10 when clicked.

function do_Bunch_of_Math() {
    var Bunch = (10 + 20) * 10 / 2 - 50;
    document.getElementById("LotsofMath").innerHTML = "(10+20)x10/2-50 = " + Bunch;
} // this does bunch of math.

function find_remainder() {
    var find = 35 % 4; //Modulus operator
    document.getElementById("remain").innerHTML = "When dividing 35 by 4 the remainder is " + find;
} // this finds the remainder of 35 divided by 4.

function negation_Operator() {
    var neg = 10;
    document.getElementById("Negation").innerHTML = "10 - 20 = " + -neg;
} // this is a negation operator.

function increment_This() {
    var inc = 100;
    inc++;
    document.getElementById("Increment").innerHTML = "What comes after 100: " + inc;
} // this increments 100 by 1

function decrement_This() {
    var dec = 100;
    dec--;
    document.getElementById("Decrement").innerHTML = "What comes before 100: " + dec;
} // this increments 100 by 1

window.alert(Math.random() * 1000);

function roundup_Math() {
    document.getElementById("roundup").innerHTML = "65.5 rounded up to the nearest whole number is: " + Math.round(65.6);
} //roundup math object method.
