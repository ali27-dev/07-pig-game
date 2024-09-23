"use strick";

//selecting elements

const score0El = document.querySelector("#score--0");

const score1El = document.querySelector("#score--1 ");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".diceNew");
const btnRoll = document.querySelector(".diceRoll");
const btnHold = document.querySelector(".diceHold");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const dice = Math.trunc(Math.random() * 50) + 4;

btnRoll.addEventListener("click", function () {});
