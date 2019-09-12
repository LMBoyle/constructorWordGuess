function Letter(char) {
  // Letter in word
  this.letterToGuess = char;
  // If the letter has been guessed yet
  this.guessedYet = false;
  // Check if letter has been guessed correctly and show letter or space
  this.display = function() {
    if (!this.guessedYet) {
      return "_";
    }
    else {
      return this.letterToGuess;
    }
  };
  // Take in guess and if it matches the letter, update guessedYet to true
  this.takeLetter = function(guess) {
    if(this.letterToGuess === guess) {
      this.guessedYet = true;
    }
  };
}

module.exports = Letter;