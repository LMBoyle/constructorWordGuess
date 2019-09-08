function Letter(char, guess) {
  // Letter in word
  this.letterToGuess = char;
  // If the letter has been guessed yet
  this.guessedYet = false;
  // User guess
  this.guess = guess;
}

// Take in guess and if it matches the letter, update guessedYet to true
Letter.prototype.takeLetter = function() {
  console.log("In take letter")
  if(this.letterToGuess === this.guess) {
    this.guessedYet = true;
    test.display();
  }
  else {
    console.log("wrong guess");
    test.display();
  }
};

Letter.prototype.display = function() {
  console.log("In display");
  if (!this.guessedYet) {
    console.log("_")
  }
  else {
    console.log(this.letterToGuess)
  }
};


var test = new Letter("t", "a");

test.takeLetter();

