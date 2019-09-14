var Word = require("./word.js");
var colors = require("colors");
var inquirer = require("inquirer");

var wordOpt = ["argument", "boolean", "branch", "bracket", "callback", "constructor", "debug", "developer", "error", "expression", "foreach", "function", "github", "glitch", "javascript", "operator", "program", "statement", "terminal"];

var guesses = 10;
var wordToGuess = "";
var runWord;
var compareArr = [];
var letterGuessed;
var display;
var booArr = [];
var guessedLetters = [];

// Pick a new word to guess
function newWord() {
  guesses = 10
  wordToGuess = wordOpt[Math.floor(Math.random() * wordOpt.length)];
  runWord = new Word(wordToGuess);
  for (var l = 0; l < runWord.lettersArr.length; l++) {
    compareArr.push(runWord.lettersArr[l].letterToGuess)
  }
  pushBoo();
};

// Push to booArr the boolean values for letters
function pushBoo() {
  booArr = [];

  for (var b = 0; b < runWord.lettersArr.length; b++) {
    booArr.push(runWord.lettersArr[b].guessedYet)
  }
  displayWord();
}

// Show the blanks and guessed letters on the screen
function displayWord() {
  display = runWord.createString();
  console.log("\n" + display + "\n")
  prompt();
};

// Prompt the user to guess a letter
function prompt(){
  if (guesses > 0 && booArr.includes(false)) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "guess",
          message: "Guess a letter!"
        }
      ]).then(function (ans) {
        if (ans.guess === "") {
          inquirer
            .prompt([
              {
                type: "confirm",
                name: "noAns",
                message: "Do you want to keep playing?",
                default: true
              }
            ]).then(function(ans){
              if (ans.noAns) {
                prompt()
              }
              else {
                console.log("\nThanks for playing")
                console.log("\n==================================\n")
              }
            });
        }
        else if (guessedLetters.includes(ans.guess)) {
          console.log("\nAlready guessed, try again\n");
          prompt();
        }
        else {
          guessedLetters.push(ans.guess.toLowerCase());
          runWord.guessMade(ans.guess.toLowerCase());
          letterGuessed = ans.guess.toLowerCase();
          nextStep();
        }
      });
  }
  else if (guesses === 0) {
    console.log("Ran out of guesses!\n");
    console.log("The correct word was: " + wordToGuess + "\n");
    playAgain();
  }
  else if (!booArr.includes(false)) {
    console.log("You guessed right!!!\n")
    playAgain();
  }
  else {
    console.log("Thanks for playing");
    console.log("\n==================================\n")
  }
}

function nextStep() {
  // If letter exists, console log correct
  if (compareArr.includes(letterGuessed)) {
    console.log("\nCORRECT!!!".green)
  }
  // If letter does not exist, console log incorrect
  // subract from guesses left
  else {
    guesses--;
    console.log("\nINCORRECT!!!".red)
    console.log("\nGuesses Left: " + guesses);
  }
  pushBoo();
}

function playAgain() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "playAgain",
        message: "Would you like to play again?",
        default: true
      }
    ]).then(function(ans){
      if (ans.playAgain) {
        newWord();
      }
      else {
        console.log("\nThanks for playing")
        console.log("\n==================================\n")
      }
    });
}

newWord();