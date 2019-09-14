var Letter = require("./letter.js");

function Word(word) {
  // The word to guess
  this.word = word;
  // Word into an array
  this.lettersArr = [];
  // Run Letter for each letter and push to array
  for (var l = 0; l < word.length; l++) {
    this.lettersArr.push(new Letter(word[l]));
  };
  // Combines letters into a string and displays on screen
  this.createString = function() {
    var wordString = "";
    for (var s = 0; s < this.lettersArr.length; s++) {
      wordString += this.lettersArr[s].display() + " ";
    };
    return wordString;
  };
  // When guess is made, run Letter guess function
  this.guessMade = function(guess) {
    for (var g = 0; g <this.lettersArr.length; g++) {
      this.lettersArr[g].takeLetter(guess)
    };
  };
};

module.exports = Word;