const markWeight_1 = 78;
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

console.log("Marks Stats:" , '\n', "BMI 1:" + ' ' + markBMI_1, '\n', "BMI 2:" + ' ' + markBMI_2);

johnBMI_1 = johnWeight_1 / (johnHeight_1 ** 2);
johnBMI_2 = johnWeight_2 / (johnHeight_2 ** 2);

const johnOutput = `Johns stats: \n\ BMI 1: ${johnBMI_1} \n\ BMI 2: ${johnBMI_2}`;

console.log("John's stats:\n","BMI 1:" + ' ' + johnBMI_1, "BMI 2:" + ' ' + johnBMI_2);
console.log(johnOutput);

markHigherBMI_1 = markBMI_1 > johnBMI_1;
markHigherBMI_2 = markBMI_2 > johnBMI_2;

console.log("Is Marks BMI higher than John's?", '\n', markHigherBMI_1, '\n', markHigherBMI_2);