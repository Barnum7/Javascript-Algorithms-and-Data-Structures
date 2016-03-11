/*
NOTE: This file contains the behaviour for exercise 4 and 5
Modify the video-rental kiosk program so that when a movie is checked out it is
added to a list of rented movies. Display this list whenever a customer checks
out a movie.
NOTE: assume that each customer can only sign out a single movie
/*
Create a check-in function for the video-rental kiosk program so that a returned
movie is deleted from the rented movies list and is added back to the available
movies list
*/

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.append = append;
  this.displayList = displayList;
  this.find = find;
  this.remove = remove;
}

function Costumer(name,movie) {
  this.name = name;
  this.movie = movie;
  this.checkout = checkout(movie);
  this.checkIn = checkIn;
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function displayList(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    console.log(this.dataStore[i]);
  }
}

function find(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt,1);
    --this.listSize;
    return true;
  }
  return false;
}

function checkout(movie) {
  checkedOutList.append(movie);
  movieList.remove(movie);
}

function checkIn() {
  movieList.append(this.movie);
  checkedOutList.remove(this.movie);
}


// Below is all the test code
var movieList = new List();
movieList.append("the shawshank redemption");
movieList.append("the green mile");
movieList.append("the great gatsby");
movieList.append("tron");
movieList.append("willy wonka and the chocolate factory");
console.log("Below is the list before checkouts");
movieList.displayList();

var checkedOutList = new List();
var brian = new Costumer("Brian", "tron");
var erika = new Costumer("Erika", "the green mile");
console.log("Below is the movie list after checkouts");
movieList.displayList();
console.log("Below is the check out list");
checkedOutList.displayList();

brian.checkIn();
console.log("Brian has returned Tron");
checkedOutList.displayList();
console.log("These are the available movies");
movieList.displayList();
