"use strick";

//selecting elements

const score0El = document.querySelector("#score--0");

const score1El = document.querySelector("#score--1 ");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".diceNew");
const btnRoll = document.querySelector(".diceRoll");
const btnHold = document.querySelector(".diceHold");

//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
//Rolling dice funtionality
btnRoll.addEventListener("click", function () {
  //1. Generating a rendom number
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2.Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice${dice}.png`;
  //3.Check for rolled 1: if true,switch to next player
});
