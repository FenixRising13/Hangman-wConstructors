// Require NPM packages and external JS files
var Inquirer = require('inquirer');
var Chalk = require('chalk');
var figlet = require('figlet');
var Letter = require('./letter');

var newGame = function () {
    //Aesthetic//////////////////////////////////////// 
    // Star Wars in figures
    figlet('Star Wars \nTrivia', function (err, data) {
        if (err) {
            console.log(Chalk.red('Something went wrong...'));
            console.dir(err);
            return;
        }

        console.log(Chalk.blue(data));
    });
    /////////////////////////////////////////Aesthetic//

    // Creates a function to ask a question via Inquirer NPM package
    // will repeat 10 times based on guessesLeft.

    this.letter = new Letter;
    var wordinplay = letter.wordinplay;
    var word = letter.word.word;
    var chosenword = letter.chosenword;
    var guesses = 0;
    var lettersGuessed = [];
    console.log(Chalk.red(wordinplay));
    // if statement to ensure that we only give 10 guesses
    var LoopOver = function () {

        if (guesses < 10) {
            // runs inquirer and asks the user a series of questions whose replies are
            // stored within the variable answers inside of the .then statement
            Inquirer.prompt([
                {
                    name: "letters",
                    message: "Choose a letter?"
                }
            ]).then(function (answers) {
                // initializes the variable letters to be part of the letters object which will take
                // in all of the user's answers to the questions above
                var letters = answers.letters.toUpperCase()
                lettersGuessed.push(letters);


                /////////////////////////////Black Hole
                for (i = 0; i < word.length; i++) {
                    if (letters == word.charAt(i)) {
                        wordinplay.splice(word.indexOf(word[i]), 1, word[i]);
                    }
                }

                console.log(wordinplay);
                console.log('Letters Guessed: ' + lettersGuessed);
                guesses++;
                LoopOver();
            });


        }

        // else statement which prints "all guessed used" to the console
        // when the code has been run ten times
        else if (guesses == 10) {
            console.log("All guesses used");
            Inquirer.prompt([
                {
                    name: "replay",
                    message: "Would you like to play again? y or n"
                }
            ]).then(function (answers) {
                if (answers.replay == 'y') {
                    newGame();
                }
                else if (answers.replay == 'n') {
                    console.log('Thank you for playing');
                }
            })
        }
        else if (wordinplay == chosenword) {
            console.log('You won! Congratulations')
            Inquirer.prompt([
                {
                    name: "replay",
                    message: "Would you like to play again? y or n"
                }
            ]).then(function (answers) {
                if (answers.replay == 'y') {
                    newGame();
                }
                else if (answers.replay == 'n') {
                    console.log('Thank you for playing');
                }
            })
        }

    };
    LoopOver();
}
newGame();
