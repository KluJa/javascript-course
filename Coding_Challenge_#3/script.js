const scoreDolphins_1 = 96;
const scoreDolphins_2 = 108;
const scoreDolphins_3 = 89;

const scoreKoalas_1 = 88;
const scoreKoalas_2 = 91;
const scoreKoalas_3 = 110;

let avgDolphins;
let avgKoalas;

avgDolphins = (scoreDolphins_1 + scoreDolphins_2 + scoreDolphins_3) / 3;
avgKoalas=(scoreKoalas_1 + scoreKoalas_2 + scoreKoalas_3) / 3;

if ((avgDolphins === avgKoalas) && (avgDolphins < 100) && (avgKoalas < 100)) {
    console.log (`There is no winner. Both teams are below minimum score. Dolphins have score of ${avgDolphins} and Koalas of ${avgKoalas}.`);
} else if (avgDolphins === avgKoalas) {
    console.log (`There is a draw, price will be split between the teams. Dolphins have score of ${avgDolphins} and Koalas of ${avgKoalas}`);
} else if ( avgDolphins > avgKoalas ) {
    console.log (`Dolphins win. Dolphins have score of ${avgDolphins} and Koalas of ${avgKoalas}`);
} else {
    console.log (`Koalas win. Dolphins have score of ${avgDolphins} and Koalas of ${avgKoalas}`);
}
