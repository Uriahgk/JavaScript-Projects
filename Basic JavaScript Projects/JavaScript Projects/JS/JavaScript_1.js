// Switch function.
function Animal_Function() {
    var Choice;
    var Animals = document.getElementById("Animal_Choice").value;
    var Animal_Text = " works!";
    switch(Animals) {
        case "Cat":
            Choice = "Cat" + Animal_Text;
            break;
        case "Dog":
            Choice = "Dog" + Animal_Text;
            break;
        case "Bird":
            Choice = "Bird" + Animal_Text;
            break;
        case "Fish":
            Choice = "Fish" + Animal_Text;
            break;
        case "Lizard":
            Choice = "Lizard" + Animal_Text;
            break;
        case "Other":
            Choice = "Other" + Animal_Text;
            break;
        default:
            Choice = "Please enter your choice as written in the above list.";
    }
    document.getElementById("Result").innerHTML = Choice;
}

function Class_change() {
    var C = document.getElementsByClassName("Secret");
    C[1].innerHTML = "A Secret!!!!";
}

//Adding a line throught my canvas diagonally.
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(500,250);
ctx.stroke();

//Adding gradient color to my canvas.
var grd = ctx.createLinearGradient(0, 0, 350, 0);
grd.addColorStop(0, "Red");
grd.addColorStop(1, "Gray");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250);
