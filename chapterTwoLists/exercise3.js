/*
Create a Person class that stores a person's name and their gender. Create a
list of at least 10 Person objects. Write a function that displays all the
people in the list of the same gender

NOTE: Would there be a better way of creating the gender list function? Without
it being added to the entire List class?
NOTE: I only did 7 people. Sue me.
*/
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.append = append;
  this.genderList = genderList;
}

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function genderList(gender) {
  gender = gender.toLowerCase();
  for (var i = 0; i < peopleList.dataStore.length; i++) {
    if (gender == peopleList.dataStore[i].gender) {
      console.log(peopleList.dataStore[i].name);
    }
  }
}

var peopleList = new List();

var brian = new Person("Brian", "male");
peopleList.append(brian);
var erika = new Person("Erika", "female");
peopleList.append(erika);
var chinmay = new Person("Chinmay", "male");
peopleList.append(chinmay);
var zad = new Person("Zad", "male");
peopleList.append(zad);
var jackie = new Person("Jackie", "female");
peopleList.append(jackie);
var mom = new Person("Karen", "female");
peopleList.append(mom);
var dad = new Person("Bill", "male");
peopleList.append(dad);

peopleList.genderList("mALE");
