<<<<<<< HEAD
"use strict";

// ----- Objects -----

// -----

// ----- Functions -----

//Function for calculating tip from a bill
function calcTip(bill) {
  let tip = 0;

  if (50 < bill && bill < 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }

  return tip;
}
// Function for calculating Average from array of bills
function calcAvg(arr) {
  let arrayTotal = 0; //Variable that will be used in the for cycle.
  let arrayAvg = 0;

  for (let i = 0; i < arr.length; i++) {
    arrayTotal = arrayTotal + arr[i];
  }

  arrayAvg = arrayTotal / arr.length;

  return arrayAvg;
}

// -----

// ----- Main -----

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

debugger;

console.log(bills, tips, totals);

console.log("Total of the bills is: ", calcAvg(bills));
console.log("Total of the bills is: ", calcAvg(tips));
console.log("Grand Total of the is: ", calcAvg(totals));

console.log("Some new text");
console.log("Some additional stuff");
=======
"use strict";

// ----- Objects -----

// -----

// ----- Functions -----

//Function for calculating tip from a bill
function calcTip(bill) {
  let tip = 0;

  if (50 < bill && bill < 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }

  return tip;
}
// Function for calculating Average from array of bills
function calcAvg(arr) {
  let arrayTotal = 0; //Variable that will be used in the for cycle.
  let arrayAvg = 0;

  for (let i = 0; i < arr.length; i++) {
    arrayTotal = arrayTotal + arr[i];
  }

  arrayAvg = arrayTotal / arr.length;

  return arrayAvg;
}

// -----

// ----- Main -----

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

debugger;

console.log(bills, tips, totals);

console.log("Total of the bills is: ", calcAvg(bills));
console.log("Total of the bills is: ", calcAvg(tips));
console.log("Grand Total of the is: ", calcAvg(totals));

console.log("Some new text");
console.log("Some additional stuff");
>>>>>>> e09d9c7cf344e0d2e91227f217a4d6ceb2db849e
