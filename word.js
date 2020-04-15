var Letter = require("./letter.js");

function Word(word) {
  this.objArray = [];

  for (var i = 0; i < word.length; i++) {
    var letter = new Letter(word[i]);
    this.objArray.push(letter);
  }

  this.logging = function () {
    letterLog = "";
    for (var i = 0; i < this.objArray.length; i++) {
      letterLog += this.objArray[i] + " ";
    }
    console.log(letterLog);
  };

  this.usersGuess = function (input) {
    for (var i = 0; i < this.objArray.length; i++) {
      this.objArray[i].guess(input);
    }
  };
}

module.exports = Word;
