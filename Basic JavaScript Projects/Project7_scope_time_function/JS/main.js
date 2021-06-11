var Z = 100; // global variable assigned.

function Local_Var() {
    var X = 25;
    console.log(X + Z); // local variable assigned.
}

function Local_Error() {
    console.log(X + Z); // attempting to use above local variable to create error.
}

function If_Test() {
    if (new Date().getHours() < 12) {
    document.getElementById("test_if").innerHTML = "Good Morning!";
    } //date().gethours() method.
}

function Four_if() {
   if (4 == 4) {
       document.getElementById("My_if").innerHTML = "4 is equal to 4!";
   }
} // my function that just says if 4 = 4 then say it.

function guess_Function() {
    Guess = document.getElementById("Guess").value;
    if (Guess == 2) {
        Answer = "You're CORRECT. The answer was 2!";
    }
    else {
        Answer = "Sorry, better luck next time!";
    }
    document.getElementById("OneorTwo").innerHTML = Answer;
} // makes you guess between 1 and 2. 2 is the correct answer.

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Good Morning!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "Good Afternoon!";
    }
    else {
        Reply = "Good Evening!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
} // function with if, else if, and else.