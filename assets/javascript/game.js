// variables
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessLeft = 9;
var wins = 0;
var losses = 0;

var wrongGuesses = []
// clear array for game reset





document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerPick);
    if (userGuess === computerPick) {
        document.getElementById("winsText").innerHTML = wins++;
    } else if (userGuess !== computerPick) {
        document.getElementById("guessText").innerHTML = guessLeft--;
        wrongGuesses.push(event.key);
        document.getElementById("wasWrongText").innerHTML = wrongGuesses;
        
       
    }

    if (guessLeft < 1) {
        guessLeft = 9;
        document.getElementById("lossesText").innerHTML = losses++;
        wrongGuesses = [];
    }


}