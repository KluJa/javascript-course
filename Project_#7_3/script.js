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

<<<<<<< HEAD
// ----- Static Constants for storing the class calls -----
=======
>>>>>>> e09d9c7cf344e0d2e91227f217a4d6ceb2db849e
const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const endTurnBtn = document.querySelector(".btn--hold");
const diceView = document.querySelector(".dice");

<<<<<<< HEAD
// ----- Player Objects -----
let playerOne = {
  // player one specific HTML classes
  playerClass: document.querySelector(".player--0"),
  currentScoreElm: document.getElementById("current--0"),
  totalScoreElm: document.getElementById("score--0"),
  playerNameCl: document.getElementById("name--0"),

  // player one specific processing classes
  totalScore: 0,
  name: "Player 1",
};

let playerTwo = {
  // player one specific HTML classes
  playerClass: document.querySelector(".player--1"),
  currentScoreElm: document.getElementById("current--1"),
  totalScoreElm: document.getElementById("score--1"),
  playerNameCl: document.getElementById("name--1"),

  // player one specific processing classes
  totalScore: 0,
  name: "Player 2",
};

// ----- Variables for processing -----
const maxScore = 100;
let activePlayer = 1;
let sessionScore = 0;
=======
// ----- Constants for storing the class calls -----

// ----- Variables for processing -----
const maxScore = 100;
let turnScore = 0;
let lastPlayer = 0;
>>>>>>> e09d9c7cf344e0d2e91227f217a4d6ceb2db849e

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
<<<<<<< HEAD
  diceView.src = diceNumber[roll - 1];

  if (roll != 1) {
    sessionScore += roll;
    player.currentScoreElm.textContent = sessionScore;
=======

  if (roll != 1) {
    diceView.src = diceNumber[roll - 1];
    turnScore = turnScore + roll;
    player.currentScoreElm.textContent = turnScore;
>>>>>>> e09d9c7cf344e0d2e91227f217a4d6ceb2db849e
  } else {
    endTurn(player);
  }
}

function endTurn(player) {
<<<<<<< HEAD
  player.totalScore = player.totalScore + sessionScore;
  player.totalScoreElm.textContent = player.totalScore;
  player.currentScoreElm.textContent = 0;
  sessionScore = 0;

  if (activePlayer === 1) {
    activePlayer = 2;
    playerOne.playerClass.classList.remove("player--active");
    playerTwo.playerClass.classList.add("player--active");
  } else if (activePlayer === 2) {
    activePlayer = 1;
=======
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
>>>>>>> e09d9c7cf344e0d2e91227f217a4d6ceb2db849e
    playerOne.playerClass.classList.add("player--active");
    playerTwo.playerClass.classList.remove("player--active");
  }
}

<<<<<<< HEAD
// ===== Main Processing

// ----- Function Calls for processing

console.log(playerTwo.playerClass.classList);
=======
// ----- Main Processing
>>>>>>> e09d9c7cf344e0d2e91227f217a4d6ceb2db849e

newGameBtn.addEventListener("click", newGame);

rollDiceBtn.addEventListener("click", function () {
<<<<<<< HEAD
  if (activePlayer === 1) {
    diceRoll(playerOne);
  } else if ((activePlayer = 2)) {
=======
  if (playerOne.playerActive) {
    diceRoll(playerOne);
  } else if (playerTwo.playerActive) {
>>>>>>> e09d9c7cf344e0d2e91227f217a4d6ceb2db849e
    diceRoll(playerTwo);
  }
});

endTurnBtn.addEventListener("click", function () {
<<<<<<< HEAD
  if (activePlayer === 1) {
    endTurn(playerOne);
  } else if ((activePlayer = 2)) {
=======
  if (playerOne.playerActive) {
    endTurn(playerOne);
  } else if (playerTwo.playerActive) {
>>>>>>> e09d9c7cf344e0d2e91227f217a4d6ceb2db849e
    endTurn(playerTwo);
  }
});
