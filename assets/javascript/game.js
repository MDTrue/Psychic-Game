var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

   
   
//  function reset()  {
   
    var wins = 0;
    var losses = 0;
    var chances = 10;
    var guesses = [];


    var randomChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(randomChoice)

    document.onkeyup = function(event){
        var userGuess = event.key;

        if(userGuess === randomChoice){
            wins++;
            chances = 10;
            guesses = [];
        
        }
        else{
            chances--;
            guesses.push(userGuess);

        }
            if(chances === 0){
                losses++;
                chances = 10;
                guesses = [];
                
            }
            document.getElementById("wins").innerHTML =  wins;
            document.getElementById("losses").innerHTML = losses;
            document.getElementById("chances").innerHTML = chances;
            document.getElementById("guesses").innerHTML = guesses;
            

    }