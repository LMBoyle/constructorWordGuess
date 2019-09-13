var Letter = require("./letter.js");

function Word(word) {
  // The word to guess
  this.word = word;
  // Word into an array
  this.lettersArr = [];
  // Breaking down word to letters and pushing to array
  this.wordToArray = function() {
    // Split the word into letters
    var breakWord = this.word.split("");
    // Run Letter for each letter and push to array
    for (var l = 0; l < breakWord.length; l++) {
      this.lettersArr.push(new Letter(breakWord[l]));
    };
  };
  // When guess is made, run Letter guess function
  this.guessMade = function(guess) {
    for (var g = 0; g <this.lettersArr.length; g++) {
      this.lettersArr[g].takeLetter(guess)
    }
  };
  // Combines letters into a string and displays on screen
  this.show = function() {
    var string = "";
    for (var s = 0; s < this.lettersArr.length; s++) {
      string += this.lettersArr[s].takeLetter() + " ";
    }
    console.log(this.lettersArr);
    return string;
  };
};

module.exports = Word;