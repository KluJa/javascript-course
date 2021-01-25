'use strict'

// ----- Objects -----
const Mark = {
    firstName : 'Mark' ,
    lastName : 'Miller',
    height : 1.69, 
    weight : 78, 
    calcBMI : function () {
        let BMI = 0;
        BMI = this.weight /(this.height ** 2);

        return BMI;
    }
};

const John = {
    firstName : 'John', 
    lastName : 'Smith', 
    height : 1.95, 
    weight : 92, 
    calcBMI : function () {
        let BMI = 0;
        BMI = this.weight /(this.height ** 2);
        
        return BMI;
    }
};
// ----------


// ----- Functions -----
const bmiWinner = function (person_1, person_2) {

    if (person_1.calcBMI < person_2.calcBMI) {
        return `${person_2.firstName} ${person_2.lastName}'s BMI of ${person_2.calcBMI()} is higher than the BMI of ${person_1.firstName}` ;
    } else if (person_1.calcBMI > person_2.calcBMI) {
        return `${person_1.firstName} ${person_1.lastName}'s BMI of ${person_1.calcBMI()} is higher than the BMI of ${person_2.firstName}` ;
    }
}
// -----

// Main
console.log(`BMI John = ${John.calcBMI()}, BMI Mark = ${Mark.calcBMI()}`);
console.log(bmiWinner(John, Mark));

