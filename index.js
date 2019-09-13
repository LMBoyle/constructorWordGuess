var Word = require("./word.js");
var inquirer = require("inquirer");

var wordOpt = ["Argument", "Boolean", "Branch", "Bracket", "Callback", "Constructor", "Debug", "Developer", "Error", "Expression", "Foreach", "Function", "Github", "Glitch", "JavaScript", "Operator", "Program", "Statement", "Terminal"];

var guesses = 10;
var wordToGuess = "";
var runWord;

function newGame() {
  wordToGuess = wordOpt[Math.floor(Math.random() * wordOpt.length)];
  runWord = new Word(wordToGuess);
  console.log(runWord)
};

function displayWord() {

};

function makeGuess() {

};

