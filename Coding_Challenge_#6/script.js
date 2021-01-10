'use strict'

// ----- Functions -----

// Function for calculating tips
function tipCalc (billValue) {
    //Function variables
    let tipValue = 0;

    //Function Processing
    if ((50 <= billValue) && (billValue <= 300)){
        tipValue = billValue * 0.15;
    } else {
        tipValue = billValue * 0.2;
    }

    return tipValue;
}

// ---------------------------------

// ----- Variables ------
const bills = [125, 555, 44];
const tips = [];
const totals = [];

// -----

// ----- Main Processing -----
bills.forEach(bill => tips.push(tipCalc(bill)));


//tips.forEach(tip => totals.push(bills.indexOf(tip)) + tip);
tips.forEach(tip => totals.push(tip + bills[tips.indexOf(tip)]));

console
console.log(totals);