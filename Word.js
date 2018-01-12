// Word Bank.
var WordList = [
  'CHEWBACCA', 'LUKE SKYWALKER', 'PRINCESS LEIA', 'KYLO REN', 'HAN SOLO', 'DARTH VADER', 'MILLENIUM FALCON', 'DEATH STAR'
];

var Word =function () {
  this.word = WordList[Math.floor(Math.random() * WordList.length)];
};

Word();

module.exports = Word;