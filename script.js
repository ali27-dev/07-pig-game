"use strick";

//selecting elements

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1 ");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--New");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--Hold");

//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//Rolling dice funtionality
btnRoll.addEventListener("click", function () {
  //1. Generating a rendom number
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2.Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `images/dice-${dice}.png`;
  //3.Check for rolled 1:

  if (dice !== 1) {
    //Add dice to current score

    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
// if true,switch to next player
