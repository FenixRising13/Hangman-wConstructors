// Require word.js
var Word = require('./word');

// Required constructor for Letter.
var Letter = function () {
    this.word = new Word;
    this.wordinplay = [];

    for (var i = 0; i < this.word.word.length; i++) {
        if (this.word.word[i] == ' ') {
            this.wordinplay.push(' ');
        }
        else {
            this.wordinplay.push('_');
        }
    }
}

// Test function to test constructor ~Thanks to Max
// var test = function (){
//     var word = new Letter();
//     console.log(word);
// };
// test();

module.exports = Letter;
