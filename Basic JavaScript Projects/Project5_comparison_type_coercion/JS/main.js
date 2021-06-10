document.write(typeof "12");
document.write("12" + 7); // Making use of typeof

function NotaNumber() {
    document.getElementById("NotNum").innerHTML = isNaN("134");
} // isNaN displaying false at the moment.

document.write(2E310); //displays infinity

document.write(-3E310); //displays -infinity

function Infinity_0() {
    document.getElementById("Infin").innerHTML = 2E310;
}// shows infinity 

function Neg_Infinity() {
    document.getElementById("NegInfin").innerHTML = -3E310;
}// shows -infinity

document.write(15>10); //displays true

document.write(15<10); // displays false

console.log(10+5); //displays 15 in the console

console.log(10<5); //displays false in the console

document.write(35==35); // displays true

document.write(74==90); // displays false

X = 10;
Y = 10;
Z = "10";
W = "Bob";
V = 11;

document.write(Y === X); // true using same data type and value

document.write(X === W); // false using different type and value

document.write(Y === Z); // false different type but same value

document.write(X === V); // false same type different value

document.write(50 > 40 && 10 < 25); // AND is true

document.write(50 < 40 && 10 < 25); // AND is false

document.write(50 < 40 || 10 < 25); // OR is true

document.write(50 < 40 || 10 > 25); // OR is false

function Not_True() {
    document.getElementById("True").innerHTML = !(5 > 15);
} // NOT is true

function Not_False() {
    document.getElementById("False").innerHTML = !(5 < 15);
} // NOT is false


