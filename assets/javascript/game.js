// variables
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessLeft = 9;
var wins = 0;
var losses = 0;
var wrongGuesses = [];

var winsText = document.getElementById("winsText");
var guessText = document.getElementById("guessText");
var wasWrongText = document.getElementById("wasWrongText");
var lossesText = document.getElementById("lossesText");

// clear array for game reset


document.onkeyup = function (event) {
    var userGuess = event.key;

    var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerPick) {
        wins++;
        guessLeft = 9;
    } else if (userGuess !== computerPick) {
        guessLeft--;
        wrongGuesses.push(event.key);
    }

    if (guessLeft === 0) {
        wrongGuesses = [];
        guessLeft = 9;
        losses++;
       }

       winsText.textContent = wins;
       lossesText.textContent = losses;
       guessText.textContent = guessLeft;
       wasWrongText.textContent = wrongGuesses;





}