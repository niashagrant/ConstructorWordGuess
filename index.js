var Word = require("./word.js");
var inquirer = require("inquirer");

var colorList = [
  "amber",
  "emerald",
  "bronze",
  "chartreuse",
  "green",
  "indigo",
  "lemon",
  "maroon",
  "orange",
  "black",
  "periwinkle",
  "lavender",
  "yellow",
  "violet",
  "tangerine",
  "red",
  "white",
];

var letterArray = "abcdefghijklmnopqrstuvwxyz";

var random = Math.floor(Math.random() * colorList.length);
var randomColor = colorList[random];

newColor = new Word(randomColor);

var requireNewColor = false;

var wrongLetters = [];
var rightLetters = [];

var guessesLeft = 10;

function playGame() {
  if (requireNewColor) {
    var random = Math.floor(Math.random() * colorList.length);
    var randomColor = colorList[random];
    newColor = new Word(randomColor);
    requireNewColor = false;
  }

  var wordFinished = [];
  newColor.objArray.forEach(completeCheck);

  if (wordFinished.includes(false)) {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Select a letter!",
          name: "userinput",
        },
      ])
      .then(function (input) {
        if (
          !letterArray.includes(input.userinput) ||
          input.userinput.length > 1
        ) {
          console.log("\nPlease try again!\n");
          playGame();
        } else {
          if (
            wrongLetters.includes(input.userinput) ||
            rightLetters.includes(input.userinput) ||
            input.userinput === ""
          ) {
            console.log("\nAlready guessed that one! Try again!\n");
            playGame();
          } else {
            var confirmWordArray = [];

            newColor.usersGuess(input.userinput);
            newColor.objArray.forEach(wordChecked);
            if (confirmWordArray.join("") === wordFinished.join("")) {
              console.log("\nSorry you are wrong!\n");

              wrongLetters.push(input.userinput);
              guessesLeft--;
            } else {
              console.log("\nYes you got that right!\n");
              rightLetters.push(input.userinput);
            }
            newColor.logging();

            console.log("\nGuesses you have left: " + guessesLeft);
            console.log(
              "\nList of wrongly guessed letters: " +
                wrongLetters.join("") +
                "\n"
            );

            if (guessesLeft > 0) {
              playGame();
            } else {
              console.log("Sorry you lost!");
            }
            function wordChecked(key) {
              confirmWordArray.push(key.guessed);
            }
          }
        }
      });
  } else {
    console.log("You know your colors! YOU WON!\n");
  }
  function completeCheck(key) {
    wordFinished.push(key.guessed);
  }
}

playGame();
