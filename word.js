var Letter = require("./letter.js");

function Word(word) {
  this.wordArr = word.split("");

  this.show = function(){
    console.log(this.wordArr);
  };
};

Word.prototype.strWord = function() {

};

Word.prototype.callLetter = function() {

}

var test = new Word("working");
test.show();