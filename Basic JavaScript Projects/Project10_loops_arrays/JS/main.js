function Count_function() {
    var Number = "";
    var Z = 0;
    while (Z < 21) {
        Number += "<br>" + Z;
        Z++;
    }
    document.getElementById("Count").innerHTML = Number;
} // counts to 20






function string_Count() {
    var A = "Bob ran all over the place.";
    var B = A.length;
    document.getElementById("Length").innerHTML = B;
} // counts how many characters are in above string





//For Loop practice.
const Instruments = ["Guitar", "Violin", "Drums", "Piano"];
var group = "";
var K;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        group += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = group;
}




// practice with arrays and having it print a selected value through index number.
function array_Function() {
    var Drink = [];
    Drink[0] = "Coke";
    Drink[1] = "Pepsi";
    Drink[2] = "Sprite";
    Drink[3] = "Mountain Dew";
    document.getElementById("Array").innerHTML = Drink[2];
}





// constant function used to produce a string
function constant_function() {
    const Xbox_Controller = {type:"Series X", brand:"Microsoft", color:"Black", operational:"is operational"};
    Xbox_Controller.color = "Black";
    Xbox_Controller.type = " Series X";
    Xbox_Controller.brand = "Microsoft";
    Xbox_Controller.operational = "is operational"
    document.getElementById("Constant").innerHTML = "This is a " +
    Xbox_Controller.color + Xbox_Controller.type + " Xbox Controller " + "and it " + Xbox_Controller.operational + ".";
}





// the below is me using "let".
var O = 25;
document.write("<br>" + O);
{
    let O = "THE LETTER O";
    document.write("<br>" + O);
}
document.write("<br>" + O);





// learned and used return statement
function Test_Re() {
    return 200 + 205;
}
document.getElementById("Returning").innerHTML = Test_Re();






// learned and used object with method.
let phone = {
    os: "iOS",
    model: "iPhone 11 Pro ",
    color: "green ",
    description : function() {
        return "I have a " + this.color + this.model + "that uses the operating system " +
        this.os + ".";
    }
};
document.getElementById("Phone_Object").innerHTML = phone.description();





//Break 
function break_atFive() {
    var apple = "";
    var M;
    for (M = 0; M < 11; M++) {
        if (M === 6) { break; }
        apple += "You have this many apples now: " + M + "<br>";
    }
    document.getElementById("break").innerHTML = apple;
}


//Continue
function continue_toTen() {
    var apples = "";
    var N;
    for (N = 0; N < 11; N++) {
        if (N === 6) { continue; }
        apples += "You have this many apples now: " + N + "<br>";
    }
    document.getElementById("continue").innerHTML = apples;
}


