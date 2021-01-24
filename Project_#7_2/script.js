"use strict";

const hidden = document.querySelector(".hidden");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttons = document.querySelectorAll(".show-modal");
const closeButton = document.querySelector(".close-modal");

function toggleModal() {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
}

function escapeModal(event) {
  if (event.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", toggleModal);
  console.log(i);
}

overlay.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

document.addEventListener("keydown", escapeModal);
