"use strict";

// ----- Array for paths to dice images
const diceNumber = [
  "dice-1.png",
  "dice-2.png",
  "dice-3.png",
  "dice-4.png",
  "dice-5.png",
  "dice-6.png",
];

const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const endTurnBtn = document.querySelector(".btn--hold");
const diceView = document.querySelector(".dice");

// ----- Constants for storing the class calls -----

// ----- Variables for processing -----
const maxScore = 100;
let turnScore = 0;
let lastPlayer = 0;

//  ===== Functions =====

// ----- Function Resets the game
function newGame() {
  // ----- Player One reset
  playerOne.playerNameCl.textContent = playerOne.name;
  playerOne.totalScore = 0;
  playerOne.currentScoreElm.textContent = 0;
  playerOne.totalScoreElm.textContent = 0;
  // ----- Player Two reset
  playerTwo.playerNameCl.textContent = playerTwo.name;
  playerTwo.totalScore = 0;
  playerTwo.currentScoreElm.textContent = 0;
  playerTwo.totalScoreElm.textContent = 0;
}

// ----- Function for "rolling" the dice
function diceRoll(player) {
  const roll = Math.trunc(Math.random() * 6) + 1;

  if (roll != 1) {
    diceView.src = diceNumber[roll - 1];
    turnScore = turnScore + roll;
    player.currentScoreElm.textContent = turnScore;
  } else {
    endTurn(player);
  }
}

function endTurn(player) {
  player.totalScore = player.totalScore + turnScore;
  player.totalScoreElm.textContent = player.totalScore;
  player.currentScoreElm.textContent = 0;
  turnScore = 0;
  if (playerOne.playerActive) {
    playerOne.playerActive = false;
    playerTwo.playerClass.classList.add("player--active");
    playerOne.playerClass.classList.remove("player--active");
  } else if (playerTwo.playerActive) {
    playerTwo.playerActive = false;
    playerOne.playerClass.classList.add("player--active");
    playerTwo.playerClass.classList.remove("player--active");
  }
}

// ----- Main Processing

newGameBtn.addEventListener("click", newGame);

rollDiceBtn.addEventListener("click", function () {
  if (playerOne.playerActive) {
    diceRoll(playerOne);
  } else if (playerTwo.playerActive) {
    diceRoll(playerTwo);
  }
});

endTurnBtn.addEventListener("click", function () {
  if (playerOne.playerActive) {
    endTurn(playerOne);
  } else if (playerTwo.playerActive) {
    endTurn(playerTwo);
  }
});
