// Require word.js
var Word = require('./word');
// Global Variables


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


module.exports = Letter;
