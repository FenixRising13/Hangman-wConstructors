var Inquirer = require("inquirer");
var Chalk = require("chalk");
var word = require("./Word");
var words = require("./words");

console.log(Chalk.green.bold('Our TAs are the best!'));

function Game() {
    var self = this;

    this.play = function () {
        this.guessesLeft = 10;
        this.nextWord();
    }
}

Game();