function Letter(letter) {
  this.letter = letter;
  this.theGuess = false;

  this.getLetter = function () {
    if (this.theGuess === false) {
      return "_";
    } else {
      return this.letter;
    }
  };
  this.letterCheck = function (guess) {
    if (guess === this.letter) {
      this.theGuess === true;
    }
  };
}

module.exports = Letter;
