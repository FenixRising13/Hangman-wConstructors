var WordList = require('./words');

var currentword

// Required constructor for Word.
function Word() {
  currentword = WordList[Math.floor(Math.random() * WordList.length)];
}

Word();

module.exports = currentword;