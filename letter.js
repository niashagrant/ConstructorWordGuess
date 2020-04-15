function Letter(letter) {
  this.letter = letter;
  this.guessed = false;

  this.checkLetter = function (input) {
    if (input === this.letter) {
      this.guessed === true;
    }
  };
  this.returnLetter = function () {
    if (this.guessed === false) {
      return "_";
    } else {
      return this.letter;
    }
  };
}

module.exports = Letter;
