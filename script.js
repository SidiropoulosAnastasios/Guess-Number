"use strict";

//creation of random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

//setting the random number inside the '.number' class of HTML

//when we check the click is executed the below method
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //no given numbers
  if (!guess) {
    document.querySelector(".message").textContent = "NO number given!";
    //when we won the game
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You found the number!";

    //when it wins changes the background color and number width
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when is to low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "To low number!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(
        ".message"
      ).textContent = `You lost!! the number is ${secretNumber} `;
      document.querySelector(".number").textContent = secretNumber;
    }
    //when is to high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "To high number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(
        ".message"
      ).textContent = `You lost!! the number is ${secretNumber} `;
      document.querySelector(".number").textContent = secretNumber;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
