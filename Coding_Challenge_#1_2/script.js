const markWeight_1 = 15;
const markHeight_1 = 1.69;
let markBMI_1;

const markWeight_2 = 95;
const markHeight_2 = 1.88;
let markBMI_2;


//
const johnWeight_1 = 92;
const johnHeight_1 = 1.95;
let johnBMI_1;

const johnWeight_2 = 85;
const johnHeight_2 = 1.76;
let johnBMI_2;

let markHigherBMI_1;
let markHigherBMI_2;


markBMI_1 = markWeight_1 / (markHeight_1 ** 2);
markBMI_2 = markWeight_2 / (markHeight_2 ** 2);

johnBMI_1 = johnWeight_1 / (johnHeight_1 ** 2);
johnBMI_2 = johnWeight_2 / (johnHeight_2 ** 2);


markHigherBMI_1 = markBMI_1 > johnBMI_1;
markHigherBMI_2 = markBMI_2 > johnBMI_2;

let outputString;
markBMI_1 = Math.round(markBMI_1);
johnBMI_1 = Math.round(johnBMI_1);

if (markHigherBMI_1) {
    outputString = `Mark's BMI of ${markBMI_1} is higher than John's`;
} else {
    outputString = `John's BMI of ${johnBMI_1} is higher than Mark's` ;
}

console.log("23" - 23);