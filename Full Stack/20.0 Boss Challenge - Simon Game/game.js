"use strict";
// ---------- Declarations
// Variables
const buttons = document.querySelectorAll(".btn");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
let level = 0;

// Funcitons
function nextSequence() {
  // Variables
  let randomNumber;
  let color;
  let randomChosenColor;
  // Generate random color
  randomNumber = Math.trunc(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  color = randomChosenColor;
  buttonFlash(color);
  let audio = new Audio(`sounds/${color}.mp3`);
  audio.play();
  // Add that color to teh pattern array
  gamePattern.push(color);
}
function playSound(name) {
  let color = name;
  let audio = new Audio(`sounds/${color}.mp3`);
  audio.play();
}
function buttonFlash(color) {
  document.getElementById(color).classList.add("flash");
  setTimeout(function () {
    document.getElementById(color).classList.remove("flash");
  }, 50);
}

// --------------- Main
// On keypress
document.addEventListener("keydown", () => {
  level++;
  // change header and start game
  document.querySelector("h1").textContent = `Level ${level}`;
  // Game starts here
  nextSequence();
  randomChosenColor();
});

buttons.forEach((button) => {
  button.addEventListener("click", (c) => {
    // Get color of button clicked
    let color = c.target.id;
    // add animation and sound to that button
    buttonFlash(color);
    playSound(color);
  });
});
