var Word = require("./word.js");
var inquirer = require("inquirer");

var wordOpt = ["Argument", "Boolean", "Branch", "Bracket", "Callback", "Constructor", "Debug", "Developer", "Error", "Expression", "Foreach", "Function", "Github", "Glitch", "JavaScript", "Operator", "Program", "Statement", "Terminal"];

var guesses = 10;
var wordToGuess = "";
var runWord;
var wordArr;
var display;

function newWord() {
  wordToGuess = wordOpt[Math.floor(Math.random() * wordOpt.length)];
  runWord = new Word(wordToGuess);
  wordArr = runWord.wordToArray();
  display = runWord.show();
  console.log(runWord)
  // console.log(wordArr)
};

function displayWord() {

};

function makeGuess() {

};

newWord();