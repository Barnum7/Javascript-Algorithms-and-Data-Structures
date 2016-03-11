/*
LOGIC: Change the add function so that it takes a week, and a temperature param
The week determines which of the subarrays the temp is pushed to (adjust for zero based indexing)

LOGIC: Change the average function to take an optional param (week). This will calculate the average for that sub array
If week is absent, calculate the average for the entire datastore
*/

//This will give me a a multidimensional array with n arrays and n indices in those arrays
Array.matrix = function (numrows, numcols, initial) {
  var arr = [];
  for (var i = 0 ; i < numrows; i++ ) {
    var columns = [];
    for (var j = 0; j < numcols; j++) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
};

var january = Array.matrix(4,7,0);
//Come back later and figure out how to do this programatically as a scripting challenge
january[0][0] = 1;
january[0][1] = 2;
january[0][2] = 3;
january[0][3] = 4;
january[0][4] = 5;
january[0][5] = 6;
january[0][6] = 7;
january[1][0] = 8;
january[1][1] = 9;
january[1][2] = 10;
january[1][3] = 11;
january[1][4] = 12;
january[1][5] = 13;
january[1][6] = 14;
january[2][0] = 15;
january[2][1] = 16;
january[2][2] = 17;
january[2][3] = 18;
january[2][4] = 19;
january[2][5] = 20;
january[2][6] = 21;
january[3][0] = 22;
january[3][1] = 23;
january[3][2] = 24;
january[3][3] = 25;
january[3][4] = 26;
january[3][5] = 27;
january[3][6] = 28;


function monthTemps() {
  this.average = average;
}

// function add(temp) {
//   this.dataStore.push(temp);
// }

function average(month, week) {
  var sum = 0;
  var daysInMonth = 0;

  if (week) {
    for (var i = 0; i < month[week-1].length; i++ ) {
      sum += month[week-1][i];
    }
    return sum / month[week-1].length;
  } else {
    for (var w = 0; w < month.length; w ++) {
      for (var d = 0; d < month[w].length; d++) {
        sum += month[w][d];
        daysInMonth ++;
      }
    }
    return sum/daysInMonth;
  }
}
// Array.protoype.average = function(week) {
//   var sum = 0;
//   console.log("I am hit");
//   if (week) {
//     for (var i = 0; i< this[week-1].length; i++) {
//       sum += this[week-1][i];
//     }
//     return sum;
//   } else {
//     console.log("There was no week given");
//   }
//   // var total = 0;
//   //
//   // for (var i = 0; i < this.dataStore.length; ++i) {
//   //   total += this.dataStore[i];
//   // }
//   //
//   // return total / this.dataStore.length;
// };

// console.log(average(january));
console.log(average(january));
