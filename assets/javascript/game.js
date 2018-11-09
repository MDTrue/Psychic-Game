
//   function reset()  {
    
    // declaring variables
    
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    
    // function reset()  {
        
        var wins = 0;
        var losses = 0;
        var chances = 10;
        var guesses = []; 
        
        document.getElementById("wins").innerHTML =  wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guesses").innerHTML = guesses;
        document.getElementById("chances").innerHTML = chances;
        
        // 1. check valid letters
        var validGuesses = "qwertyuiopasdfghjklzxcvbnm".split("")
        console.log(validGuesses)

        // 2. push guessed letters into their own array

        // 3. 
        
        // this calls the random letter
        function generateGuess(){
           return alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        console.log(generateGuess());
       var randomChoice = generateGuess()
        // reset()
        // console.log(randomChoice)
        
        
        document.onkeyup = function(event){
            var userGuess = event.key;
            
            console.log(userGuess);
            
            if(userGuess === randomChoice){
                wins++;
                chances = 10;
                guesses = [];
                randomChoice = generateGuess()
               console.log("chicken")
            }
            else{
                chances--;
                // for loop here if "plz guess again", else 
                guesses.push(userGuess);
                
            }
            if(chances === 0){
                losses++;
                chances = 10;
                guesses = [];
                randomChoice = generateGuess()
                // reset()
            }
            document.getElementById("wins").innerHTML =  wins;
            document.getElementById("losses").innerHTML = losses;
            document.getElementById("guesses").innerHTML = guesses;
            document.getElementById("chances").innerHTML = chances; 
            
            
        }
        