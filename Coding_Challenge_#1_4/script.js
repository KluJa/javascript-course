const bill_1 = 40;
const bill_2 = 275;
const bill_3 = 430;

const tip_1 = ((50 <= bill_1) && (bill_1 <= 300)) ? bill_1 * 0.15 : bill_1 * 0.2;
const tip_2 = ((50 <= bill_2) && (bill_2 <= 300)) ? bill_2 * 0.15 : bill_2 * 0.2;
const tip_3 = ((50 <= bill_3) && (bill_3 <= 300)) ? bill_3 * 0.15 : bill_3 * 0.2;

console.log(`Bill 1 is worth of ${bill_1}$, hence tip 1 makes ${tip_1}$. Total sum: ${bill_1 + tip_1}$`);
console.log(`Bill 2 is worth of ${bill_2}$, hence tip 1 makes ${tip_2}$. Total sum: ${bill_2 + tip_2}$`);
console.log(`Bill 3 is worth of ${bill_3}$, hence tip 1 makes ${tip_3}$. Total sum: ${bill_3 + tip_3}$`); 