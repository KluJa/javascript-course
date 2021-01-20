"use strict";

const hidden = document.querySelector(".hidden");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttons = document.querySelectorAll(".show-modal");

function showModal() {
  modal.classList.remove("hidden");
}

function toggleModal() {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", toggleModal);
  console.log(i);
}
