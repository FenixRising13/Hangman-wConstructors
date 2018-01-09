var Inquirer = require("inquirer");
var Chalk = require("chalk");
var word = require("./Word");
var words = require("./words");
var letters = require("./letters")

console.log(Chalk.green.bold('Our TAs are the best!'));

function Game() {
    var self = this;

    this.play = function () {
        this.guessesLeft = 10;
        this.nextWord();
    }
}

Game();

var guessesLeft = 10

var askQuestion = function() {
    // if statement to ensure that we only give 10 guesses
    if (guessesLeft > 0) {
      // runs inquirer and asks the user a series of questions whose replies are
      // stored within the variable answers inside of the .then statement
      Inquirer.prompt([
        {
          name: "letters",
          message: "Choose a letter?"
        }
      ]).then(function(answers) {
        // initializes the variable Letters to be part of the letters object which will take
        // in all of the user's answers to the questions above
        var Letters = new letters(
          answers.letters);
        // printInfo method is run to show that the newguy object was successfully created and filled
        letters.printInfo();
        // add one to count to increment our recursive loop by one
        count--;
        // run the askquestion function again so as to either end the loop or ask the questions again
        askQuestion();
      });
      // else statement which prints "all questions asked" to the console
      // when the code has been run five times
    }
    else {
      console.log("All guesses used");
    }
  };
  askQuestion();