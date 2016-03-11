/*
LOGIC: The function for adding a grade will take 2 params
  -The student name which will give you the key (array of grades is the value)
  -You push the second param (the grade) to the end of the grades array

  -To get the student's grade average you call a method with a single param
   - The param is the student's name. You then sum every grade in the array, and divide by the array length
*/

/*
Going off script here. Having an object that holds a bunch of grades seems silly.
I'm going to make an object that holds students and has an array of their grades
*/

function students(student,grade) {
  this.student = student;
  this.grade = [grade];
  this.addGrade = addGrade;
  this.average = average;
}

function average() {
  var sum = 0;

  for (var i = 0; i < this.grade.length; i++) {
    sum += this.grade[i];
  }
  return sum/this.grade.length;
}

function addGrade(newGrade) {
  this.grade.push(newGrade);
}

var brian = new students("Brian",95);

console.log("Starting Grade: " + brian.grade);
console.log("Starting Average: " + brian.average());
brian.addGrade(80);
console.log("Grades after adding new grade: " + brian.grade);
console.log("Average after adding new grade: " + brian.average());
