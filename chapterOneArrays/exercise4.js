function letters(arr) {
  this.letters = arr;
  this.toString = toString;
}

//There must be a clearner way to do this
function toString() {
  var str = "";
  for (var i = 0; i < this.letters.length; i++) {
    str += this.letters[i];
  }
  return str;
}

var test = new letters(["H","o","u","s","e"]);
var test2 = new letters(["B","r","i","a","n"]);

console.log(test.toString());
console.log(test2.toString());
