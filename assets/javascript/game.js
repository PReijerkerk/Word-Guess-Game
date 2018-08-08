//Variables
//----------------

var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var wordHolder = [];
var incorrectGuesses = [];
var keyPress;
var winCounter = 0;
var lossCounter = 0;
var guessRemaining = 10;
var userInput;

//Array of Pac-Man Names
var wordArray = [
    "BLINKY",
    "PINKY",
    "INKY",
    "CLYDE",
    "PACMAN"
];

//Function to collect userKeyInput
//----------------------------------
document.onkeyup = function(event) {
    console.log("This key was entered", event.key);
   // var keyPress;

    if (typeof (event.key) !="undefined") { 
        keyPress = event.keyCode;

        //convert user input key into an upper case string.
        userInput = String.fromCharCode(keyPress).toUpperCase();
        console.log(userInput + " This should match what key you enter");
    }
    else if (e) {
        keyPress = e.which;
    } return false;
};

//Created a function to call at the start of the game
function startGame() {
    //Create the array for incorrectGuesses to hold any incorrect guesses
    incorrectGuesses = [];
    console.log("This is made to hold any wrong guesses at the start of the game", incorrectGuesses);
    //sets the number of guesses remaining at game start to 10
    guessRemaining = 10;
    //creates an empty array to hold both the _ and the correct letters
    wordHolder = [];

    chosenWord = wordArray[Math.floor(Math.random()* wordArray.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;
    console.log(chosenWord); //This will print the word to the console
    console.log(numBlanks); //This should print the # of spaces to the console

    for (var i = 0; i < numBlanks; i++){
        wordHolder.push("_");
        }
    console.log(wordHolder);
    document.getElementById("blank-word").innerHTML =  wordHolder.join(" ");
    document.getElementById("guessRemaining").innerHTML = guessRemaining;
};
startGame();

function checkLetter(){
var lettersInWord = false;

for (i = 0; i < numBlanks; i++) {
    if (chosenWord[i] == userInput){
        lettersInWord = true;
    }
}

if (lettersInWord){
    for (i = 0; i < numBlanks; i++){
        if(chosenWord[i] === userInput){
            wordHolder[i] = userInput;
            console.log("This step works");
        }
    }
} else{
    guessRemaining--;
    incorrectGuesses.push(userInput);
    console.log("This step doesn't work");
}
};
//created a function to determine if a game is won or lost
function completeRound(){
    document.getElementById("blank-word").innerHTML = wordHolder.join(" ");
    document.getElementById("guessRemaining").innerHTML = guessRemaining;
    document.getElementById("incorrectGuesses").innerHTML = incorrectGuesses.join(" ");

    console.log(lettersInChosenWord);
    console.log(wordHolder);
    if (lettersInChosenWord.join(" ") === wordHolder.join(" ")){
        winCounter++;
        alert("You've Won")
        document.getElementById("winCounter").innerHTML = winCounter;
        startGame();
    }
    else if (guessRemaining === 0){
        document.getElementById("lossCounter").innerHTML = lossCounter++;
        document.getElementById("incorrectGuesses").innerHTML = "";
        alert("You've run out of guesses");
        startGame();
    }
};

