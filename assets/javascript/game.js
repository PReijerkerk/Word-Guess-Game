//Variables
//----------------

var wins = 0;
var guessesRemaining = 10;
var lettersGuessed = [];
var placeholderArray = [];
var priorPlaceholderArray = [];
var wordPlaceholder = [];
var word= [];
var wordString = "";
var userInput = "";

//Object for Pac-Man Hangman

var PacManNames = {
    word1: ["B","L","I","N","K","Y"],
    word2: ["P","I","N","K","Y"],
    word3: ["I","N","K","Y"],
    word4: ["C","L","Y","D","E"],
    word5: ["P","A","C","M","A","N"]
};

//Array of Pac-Man Names created from object created above
var wordArray = [PacManNames.word1, PacManNames.word2, PacManNames.word3, PacManNames.word4, PacManNames.word5];

//Placeholder function to trigger start of game

//Function to collect userKeyInput
//----------------------------------
document.onkeyup = function(event) {
    console.log("This key was entered", event.key);
    var keyPress;

    if (typeof event != "undefined") {
        keyPress = event.keyCode;

        //convert user input key into an upper case string.
        userInput = String.fromCharCode(keyPress).toUpperCase();
        console.log(userInput + " This should match what key you enter");

        //Track Letters guessed 
        trackLetterGuesses(userInput);

        //Based on user input reveals the word
    }
    else if (e) {
        keyPress = e.which;
    } return false;
    
};