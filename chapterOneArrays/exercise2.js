var words = ["If","only","if","only","the","woodpecker","sighed"];

function listWords(word) {
  console.log(word);
}

Array.prototype.backwards = function() {
  words.reverse();
  words.forEach(listWords);
};

words.forEach(listWords);
words.backwards();
