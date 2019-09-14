var Word = require("./word.js");
var inquirer = require("inquirer");

var wordOpt = ["Argument", "Boolean", "Branch", "Bracket", "Callback", "Constructor", "Debug", "Developer", "Error", "Expression", "Foreach", "Function", "Github", "Glitch", "JavaScript", "Operator", "Program", "Statement", "Terminal"];

var guesses = 10;
var wordToGuess = "";
var runWord;
var display;

function newWord() {
  wordToGuess = wordOpt[Math.floor(Math.random() * wordOpt.length)];
  runWord = new Word(wordToGuess);
  displayWord();
};

function displayWord() {
  display = runWord.createString();
  console.log(display);
  prompt();
};

function prompt(){
  if (guesses > 0 || wordToGuess === display) {
    inquirer.prompt([
      {
        type: "input",
        name: "guess",
        message: "Guess a letter!"
      }
    ]).then(function (ans) {
      console.log(ans.guess);
      runWord.guessMade(ans.guess);
      displayWord();
    })
  }
  else {
    console.log("End")
  }
}


newWord();