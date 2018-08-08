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
createWord(wordArray);

//Function to collect userKeyInput
//----------------------------------
document.onkeyup = function(event) {
    console.log("This key was entered", event.key);
    var keyPress;

    if (typeof (event.key) !="undefined") { 
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

//Functions

//creates an Array with a randomly selected word from the Pac-Man wordArray
function createWord(wordArray) {
    word =wordArray[Math.floor(Math.random()* wordArray.length)];
    console.log(word);

//creates a placeholder array for the chosen word
createWordPlaceholder(word);
return word;
};

//defines the function for createWordPlaceholder
function createWordPlaceholder(word) {
    var wordPlaceholder = [];

    //Fill wordPlaceholder Array with underscores
    for (i = 0; i < word.length; i++) {
        wordPlaceholder.push("_");
    }

    //convert array into a string for displaying on html
    wordString = wordPlaceholder.join(" ");

    //Displays word on page
    document.getElementById("wordPlaceholder").textContent = wordString;
    return wordPlaceholder;
};

//Track user letter guesses
function trackLetterGuesses(userInput) {
    //Checks if the letter is already guessed
    //Tracks letters only once
    for (i = 0; i <lettersGuessed.length; i++) {
        if (userInput == lettersGuessed[i]) {
            return;
        }
    }

    //Push letters guessed into lettersGuessed
    lettersGuessed.push(userInput);
    console.log("letters guessed" + lettersGuessed[0]);

    //convert the letters guessed into a string for displaying into the html
    var lettersGuessedString = lettersGuessed.join(", ");
    document.getElementById("guesses").innerHTML = lettersGuessedString;

    //Reduces the number of guesses left
    guessesRemaining--;

    //display guesses left in html
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    console.log("Guesses left" + guessesRemaining);

    //Restart the game if guesses gets to 0
    if (guessesRemaining == 0) {
        restartGame();
    }

    return lettersGuessedString;
};