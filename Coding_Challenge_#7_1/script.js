"use strict";

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

console.log(randomNumber);

function guessing() {
  const guess = Number(document.querySelector(".guess").value);

  if (guess < 1 && guess > 20) {
    // Illegal Value on the input
    document.querySelector(".number").textContent = guess;
    document.querySelector(".message").textContent =
      "Invalid value, please select number between 1 and 20";
  } else if (guess === randomNumber) {
    // Correct Guess
    document.querySelector(".number").textContent = randomNumber; //
    document.querySelector(".message").textContent = "You are correct";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    score++;
    document.querySelector(".score").textContent = score;
  } else if (guess < randomNumber) {
    // Low Guess
    document.querySelector(".message").textContent =
      "You are not correct. Number too Low";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess > randomNumber) {
    // High Guess
    document.querySelector(".message").textContent =
      "You are not correct. Number too high";
    score--;
    document.querySelector(".score").textContent = score;
  }
}

// Function for reseting the game. Sets background to black
function reset() {
  const guess = Number(document.querySelector(".guess").value);
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
}

document.querySelector(".check").addEventListener("click", guessing);
document.querySelector(".again").addEventListener("click", reset);
