// Require word.js
var word = require('./word');
// Global Variables
var wordinplay = [];

// Required constructor for Letter.
function Letter() {

    for (var i = 0; i < word.length; i++) {
        if (word[i] == ' ') {
            wordinplay.push(' ');
        }
        else {
            wordinplay.push('_');
        }
    }
}
Letter();

module.exports = wordinplay;
