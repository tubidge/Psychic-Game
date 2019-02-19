//  On page load, computer picks one of 26 letters at random
//  User presses a letter to guess
//  Capture the user's guess
//  Display each of the user's guesses 
//      User gets 10 guesses
//  Compare the user's guess to the computer's guess
//      If correct, 'Wins'++
//          Reset 'Your Guesses so far'
//      If incorrect, 'Guesses Left'--
//   If incorrect guess is made 10 times, 'Losses'++
//      Reset 'Your Guesses so far'

// Array of 26 letters for computer to choose from
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables to hold number of wins, losses, guesses left, and guesses so far
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
// Variables holding reference to HTML elements
var instructionsText = document.getElementById("instructions");
var lettersGuessedText = document.getElementById("letters-guessed");
var guessesLeftText = document.getElementById("guesses-left");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");

// Variable to choose computer guess on page load
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// User's guess is captured and made lower case, decrement Guesses Left
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    guessesLeft--;
// Log comp and user guess
    console.log("Computer Guess: " + computerGuess);
    console.log("Your Guess: " + userGuess);
    console.log("------------");
// Update new guessesLeft to page
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
// Push user guess to guessesSoFar array
    guessesSoFar.push(" " + userGuess);
// Update new guessesSoFar to page
    lettersGuessedText.textContent = "Your Guesses So Far: " + guessesSoFar;
// Check if userGuess is correct. 
// If so, increment Wins, reset guessesLeft and guessesSoFar, update to page, comp picks new random letter, alert "Win"
    if (userGuess === computerGuess) {
        wins++;
        winsText.textContent = "Wins: " + wins;
        guessesLeft = 10;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        guessesSoFar = [];
        lettersGuessedText.textContent = "Your Guesses So Far: ";
        alert("You Won!");
// If user makes 10 incorrect guesses, increment Losses, reset guessesLeft and guessesSoFar, update to page, comp picks new random letter, alert "Lose"
    } else if (guessesLeft < 1) {
        losses++;
        lossesText.textContent = "Losses: " + losses;
        guessesLeft = 10;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        guessesSoFar = [];
        lettersGuessedText.textContent = "Your Guesses So Far: ";
        alert("You Lost!")
    }
    };




