// Require NPM packages and external JS files
var Inquirer = require('inquirer');
var Chalk = require('chalk');
var figlet = require('figlet');
var letter = require('./letter');

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

// global variable for guessesLeft
var guessesLeft = 0
// array for lettersGuessed
var lettersGuessed = [];


// Creates a function to ask a question via Inquirer NPM package
// will repeat 10 times based on guessesLeft.
var askQuestion = function () {

    

    // if statement to ensure that we only give 10 guesses
    if (guessesLeft < 10) {
        // runs inquirer and asks the user a series of questions whose replies are
        // stored within the variable answers inside of the .then statement
        Inquirer.prompt([
            {
                name: "letters",
                message: "Choose a letter?"
            }
        ]).then(function (answers) {
            // initializes the variable Letters to be part of the letters object which will take
            // in all of the user's answers to the questions above
            lettersGuessed.push(answers.letters);
            // add one to count to increment our recursive loop by one
            guessesLeft++;
            for (i = 0; i < word.length; i++) {
                if (answers.letters == word.charAt(i)) {
                    var guesses = letter.splice(IndexOf(word[i]));
                    
                }
            }

            // run the askquestion function again so as to either end the loop or ask the questions again
            askQuestion();
            console.log(guesses);
        });
        // else statement which prints "all questions asked" to the console
        // when the code has been run five times
    }
    else {
        console.log("All guesses used");
    }
};

// var mark = function (){
//     var word = new Letter();
//     console.log(word);
// };
// mark();
askQuestion();
