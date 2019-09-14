var Word = require("./word.js");
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
  console.log(display)
  prompt();
};

// Prompt the user to guess a letter
function prompt(){
  if (guesses > 0 && booArr.includes(false)) {
    inquirer.prompt([
      {
        type: "input",
        name: "guess",
        message: "Guess a letter!"
      }
    ]).then(function (ans) {
      console.log(wordToGuess);
      if (guessedLetters.includes(ans.guess)) {
        console.log("Already guessed, try again");
        prompt()
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
    console.log("Ran out of guesses!")
    // TODO playAgain();
  }
  else if (!booArr.includes(false)) {
    console.log("You got it!")
     //TODO playAgain();
  }
  else {
    console.log("End")
  }
}

function nextStep() {
  // If letter exists, console log correct
  if (compareArr.includes(letterGuessed)) {
    console.log("CORRECT!")
  }
  // If letter does not exist, console log incorrect
  // subract from guesses left
  else {
    guesses--;
    console.log("INCORRECT! \nGuesses Left: " + guesses)
  }
  // TODO If all the letters are guessed, end game
  // TODO Else, keep playing
  pushBoo();
}

newWord();