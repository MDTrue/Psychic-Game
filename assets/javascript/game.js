
//   function reset()  {

// declaring variables

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// function reset()  {

var wins = 0;
var losses = 0;
var chances = 10;
var guesses = [];
var message = "Play at your own risk";
var message2 = "";
var message3 = "";
var message4 = "";
var message5 = "";
var message6 = "";
var message7 = "";
var message8 = "";
var message9 = "";
var message10 = "";
var message11 = "";
var message12 = "";
var message13 = "";
var message14 = "";
var message15 = "";
var message16 = "";
var message17 = "";
var message18 = "";
var message19 = "";
var message20 = "";
var message21 = "";
var message22 = "";
var message23 = "";
var message24 = "";
var message25 = "";
var message26 = "";





document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guesses").innerHTML = guesses;
document.getElementById("chances").innerHTML = chances;
document.getElementById("message").innerHTML = message;


// 1. check valid letters
var validGuesses = "qwertyuiopasdfghjklzxcvbnm".split("")
console.log(validGuesses)

// 2. push guessed letters into their own array

// 3. 

// this calls the random letter
function generateGuess() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(generateGuess());
var randomChoice = generateGuess()
// reset()
// console.log(randomChoice)


document.onkeyup = function (event) {
    var userGuess = event.key;
    message = "";
    

    console.log(userGuess);

    if (userGuess === randomChoice) {
        wins++;
        chances = 10;
        guesses = [];
        randomChoice = generateGuess()
        //left in the chicken to see if you notice.
        console.log("chicken")
        message = "you win, loser"
        message1 = "";
        message3 = "";
        message5 = "";
        message7 = "";
        message9 = "";
        message11 = "";
        message13 = "";
        message15 = "";
        message17 = "";
        message19 = "";
        message21 = "";
        message23 = "";
        message25 = "";
        
    }
    else {
        chances--;
        // for loop here if "plz guess again", else 
        // for(j = 0; j < guesses.length; j++){
        // I found the loop not needed Here, but I bet there is another way

        if (validGuesses.indexOf(userGuess) < 0) {
            // alert("use real letters dude")
            message = "use real letters dude"
        }
        guesses.push(userGuess);

    }
    if (chances === 0) {
        losses++;
        chances = 10;
        guesses = [];
        randomChoice = generateGuess()
        message = "you lose, again, get used to it"
        message2 = "";
        message4 = "";
        message6 = "";
        message8 = "";
        message10 = "";
        message12 = "";
        message14 = "";
        message16 = "";
        message18 = "";
        message20 = "";
        message22 = "";
        message24 = "";
        message26 = "";

        // reset()
    }

    if (userGuess === "b") {
        message = "BOOO";
    }
    if (userGuess === "k") {
        message11 = "kkkkkkiss me";
    }
    if (userGuess === "q") {
        message2 = "quiver at my wrath";
    }
    if (userGuess === "w") {
        message3 = "Who do you think you are?";
    }
    if (userGuess === "e") {
        message4 = "EVIL lurks";
    }
    if (userGuess === "r") {
        message5 = "rest in peace";
    }
    if (userGuess === "t") {
        message6 = "tickle tickle";
    }
    if (userGuess === "u") {
        message7 = "undertaker wanted";
    }
    if (userGuess === "y") {
        message8 = "yell all you want";
    }
    if (userGuess === "i") {
        message9 = "infidel";
    }
    if (userGuess === "o") {
        message10 = "oculture club";
    }
    if (userGuess === "p") {
        message12 = "paranormal animals";
    }
    if (userGuess === "a") {
        message13 = "ars gratis artis";
    }
    if (userGuess === "s") {
        message14 = "slytherin lives";
    }
    if (userGuess === "d") {
        message15 = "demonology today";
    }
    if (userGuess === "f") {
        message16 = "fear me";
    }
    if (userGuess === "g") {
        message17 = "goooood evening";
    }
    if (userGuess === "h") {
        message18 = "haunted house for sale";
    }
    if (userGuess === "l") {
        message19 = "Last chance";
    }
    if (userGuess === "z") {
        message20 = "zombification";
    }
    if (userGuess === "c") {
        message21 = "chiller time";
    }
    if (userGuess === "n") {
        message22 = "noooooo";
    }
    if (userGuess === "v") {
        message23 = "vampire state";
    }
    if (userGuess === "b") {
        message24 = "booooo";
    }
    if (userGuess === "n") {
        message25 = "Nevermore";
    }
    if (userGuess === "m") {
        message26 = "monstermash";
    }                  
    
 
 
 
 
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("chances").innerHTML = chances;
    document.getElementById("message").innerHTML = message;
    document.getElementById("message2").innerHTML = message2;
    document.getElementById("message3").innerHTML = message3;
    document.getElementById("message4").innerHTML = message4;
    document.getElementById("message5").innerHTML = message5;
    document.getElementById("message6").innerHTML = message6;
    document.getElementById("message7").innerHTML = message7;
    document.getElementById("message8").innerHTML = message8;
    document.getElementById("message9").innerHTML = message9;
    document.getElementById("message10").innerHTML = message10;
    document.getElementById("message11").innerHTML = message11;
    document.getElementById("message12").innerHTML = message12;
    document.getElementById("message13").innerHTML = message13;
    document.getElementById("message14").innerHTML = message14;
    document.getElementById("message15").innerHTML = message15;
    document.getElementById("message16").innerHTML = message16;
    document.getElementById("message17").innerHTML = message17;
    document.getElementById("message18").innerHTML = message18;
    document.getElementById("message19").innerHTML = message19;
    document.getElementById("message20").innerHTML = message20;
    document.getElementById("message21").innerHTML = message21;
    document.getElementById("message22").innerHTML = message22;
    document.getElementById("message23").innerHTML = message23;
    document.getElementById("message24").innerHTML = message24;
    document.getElementById("message25").innerHTML = message25;
    document.getElementById("message26").innerHTML = message26;


}
