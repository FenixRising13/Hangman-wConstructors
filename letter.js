var word = require('./word');

// Required constructor for Letter.
function Letter() {
    this.lettersOfTheWord = [];

    for (var i = 0; i < word.length; i++) {
        letter = word.split("");
        lettersOfTheWord.push(letter);


    }


    for (var i = 0; i < lettersOfTheWord.length; i++) {
        if (this.lettersOfTheWord[i] = ' ') {
            return ' ';
        }
        else {
            return '_';
        }
    }

}

Letter();

module.exports = Letter;
