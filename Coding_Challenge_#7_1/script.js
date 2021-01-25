"use strict";

<<<<<<< HEAD
let score = 50;

while(score != 0) ()


=======
// Function meant for replacing query selector code,
// 1st attribute is the given HTML node or its .class, needs to be in ""
// 2nd attribute is the value/or message we want the given attribute to display, strings need "" or ``
function changeText(node, text) {
	document.querySelector(node).textContent = text;
}

// Function to replace the repetitve code for too low and too high value guess.
// input is a string that tells whether the value is low or high relative to generated Number.
function lowHighGuess(valueSize) {
	score--;
	changeText(".message", `You are not correct. Number too ${valueSize}`);
	changeText(".score", score);
}

// Function for reseting the game. Sets background to black
function reset() {
	const guess = Number(document.querySelector(".guess").value);
	score = 20;
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
	changeText(".number", "?");
	document.querySelector(".guess").value = "";
	changeText(".message", "Start guessing...");
	changeText(".score", score);
}

//Function faciliating the main logic of the "game"
function guessing() {
	const guess = Number(document.querySelector(".guess").value);
	// ----- Invalid input
	if (guess < 1 || guess > 20) {
		changeText(".number", guess);
		changeText(
			".message",
			"Invalid value, please select number between 1 and 20"
		);
	} // ----- Correct Guess
	else if (guess === randomNumber) {
		changeText(".number", randomNumber);
		document.querySelector("body").style.backgroundColor = "green";
		document.querySelector(".number").style.width = "30rem";
		score++;
		changeText(".score", score);
		changeText(".message", "You are Correct!");
		//Validate that score is higher than highscore and, if true, set highscore
		score > highscore ? (highscore = score) : highscore;
		changeText(".highscore", highscore);
	} // ----- Low Guess
	else if (guess < randomNumber) {
		lowHighGuess("low");
	} // ----- High Guess
	else if (guess > randomNumber) {
		lowHighGuess("high");
	}
}

// ----- Main Processing -----
const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", guessing);
document.querySelector(".again").addEventListener("click", reset);
>>>>>>> e09d9c7cf344e0d2e91227f217a4d6ceb2db849e
