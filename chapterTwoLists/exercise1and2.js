/*
Write a function that inserts an element into a list only if the element to be
inserted is larger than any of the elements currently in the list. Larger can
mean either greater than when working with numerical values, or further down in
the alphabet, when working with textual values

NOTE: I will just be adding the above behaviour to my default append()
NOTE: This file contains the behaviour for exercise 1 and 2
/*
Write a function that inserts an element into a list only if the element to be
inserted is smaller than any of the elements currently in the list.
*/


function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.append = append;
  this.appendIfSmaller = appendIfSmaller;
}

var myList = new List();

function append(element) {
  var biggest = true;
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] > element) {
      biggest = false;
    }
  }
  if (biggest) {
  this.dataStore[this.listSize++] = element;
  } else {
    console.log("I'm afraid there is a bigger item in the list");
  }
}

function appendIfSmaller(element) {
  var smallest = true;
  for (var i = 0; i < this.dataStore.length; i++) {
    if(this.dataStore[i] < element) {
      smallest = false;
    }
  }
  if (smallest) {
    this.dataStore[this.listSize++] = element;
  } else {
    console.log("I'm afraid there's already a smaller item in the list");
  }
}

console.log("Before adding an item: " + myList.dataStore);
myList.append(1);
console.log("After adding an item: " + myList.dataStore);
myList.appendIfSmaller(-2);
console.log("After adding an item that is smaller than my current item the first time: " + myList.dataStore);
myList.appendIfSmaller(-3);
console.log("After adding a smaller item a second time: " + myList.dataStore);
myList.appendIfSmaller(10);
console.log("After adding a bigger item: " + myList.dataStore);
