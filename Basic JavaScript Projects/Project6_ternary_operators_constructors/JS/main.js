function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
} // this uses a Ternary Operator to determine if you are less than, equal to or more than 52 centimeters and tells you if you can ride based on your input.

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are able";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote!"
} // this uses a Ternary Operator to determine if you can vote based on the limitation of being 18 years old.

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emiliy = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// the next comment below is the variable I assigned a reserved word to. Had to comment it out for obvious reasons.


//var with = "This won't work";
//document.write(with);



// my own Object Constructor Function
function Console(Brand, Model, Color) {
    this.Console_Brand = Brand;
    this.Console_Model = Model;
    this.Console_Color = Color;
}

var Uri = new Console("Sony", "PS5", "White");
var Zach = new Console("Microsoft", "Xbox Series X", "Black");

function myConsole() {
    document.getElementById("New_and_This").innerHTML = 
    "Zach plays on a " + Zach.Console_Color + " " + Zach.Console_Model +
    " manufactured by " + Zach.Console_Brand;
}

function add_function() {
    document.getElementById("Nested_Function").innerHTML = Add();
    function Add(){
        var G = 10;
        function Adding() {G += 11;}
        Adding();
        return G;
    }
}