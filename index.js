var Word = require("./word.js");
var inquirer = require("inquirer");

var wordOpt = ["Argument", "Boolean", "Branch", "Bracket", "Callback", "Constructor", "Debug", "Developer", "Error", "Expression", "Foreach", "Function", "Github", "Glitch", "JavaScript", "Operator", "Program", "Statement", "Terminal"];

var guesses = 10;
var wordToGuess = "";
var runWord;
var display;
var booArr = [];

function newWord() {
  wordToGuess = wordOpt[Math.floor(Math.random() * wordOpt.length)];
  runWord = new Word(wordToGuess);
  lettersLeft = runWord.lettersArr.length;
  pushBoo();
};

function pushBoo() {
  booArr = []
  for (var b = 0; b < runWord.lettersArr.length; b++) {
    booArr.push(runWord.lettersArr[b].guessedYet)
  }
  displayWord();
}

function displayWord() {
  display = runWord.createString();
  console.log(display)
  console.log(booArr)
  prompt();
};

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
      runWord.guessMade(ans.guess);
      nextStep();
    })
  }
  else if (guesses === 0) {
    console.log("Ran out of guesses!")
    playAgain(); //TODO
  }
  else if (!booArr.includes(false)) {
    console.log("You got it!")
    playAgain(); //TODO
  }
  else {
    console.log("End")
  }
}

function nextStep() {
  // TODO If letter exists, console log correct
  // TODO subtract from letters left
  /*if () {
    console.log("CORRECT!")
  }*/
  // TODO if letter does not exist, console log incorrect
  // TODO subract from guesses left
  /*else if() {
    guesses--;
    console.log("INCORRECT! \nGuesses Left: " + guesses)
  }*/

  // TODO If all the letters are guessed, end game
  // TODO Else, keep playing
  pushBoo();
}

newWord();