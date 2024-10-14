//create JS representation from the DOM
const startText = document.getElementById("startText");

//Games Variable
let gameRunning = false;

document.addEventListener("keydown", startGame);

// Start Game
function startGame() {
  gameRunning = true;
  startText.style.display = "none";
}
