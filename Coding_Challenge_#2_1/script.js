'use strict'


// Arrow function for calculating average
const calcAverage = (score_1, score_2, score_3) => (score_1 + score_2 + score_3)/3;

// Function for calculating winner
function checkWinner(scoreD_1,scoreD_2,scoreD_3,scoreK_1,scoreK_2,scoreK_3) {
    const avgDolphins = calcAverage(scoreD_1,scoreD_2,scoreD_3);
    const avgKoalas = calcAverage(scoreK_1,scoreK_2,scoreK_3);

    if (avgDolphins < 2*avgKoalas){
        console.log(`Koalas win with the score ${avgKoalas} : ${avgDolphins}`);
    } else if (avgKoalas < 2*avgDolphins) {
        console.log(`Dolphins win with the score ${avgDolphins} : ${avgKoalas}`);
    } else {
        console.log("No winner");
    }
}

// Processing

checkWinner(44, 23, 71, 65, 54, 49);
checkWinner(85, 54, 41, 23, 34 ,27);