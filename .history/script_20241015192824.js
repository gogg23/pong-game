//create JS representation from the DOM
const startText = document.getElementById("startText");

//Games Variable
let gameRunning = false;
let keysPressed = {};

document.addEventListener("keydown", startGame);

// Start Game
function startGame() {
  gameRunning = true;
  console.log("start");
  startText.style.display = "none";
  document.removeEventListener("keydown", startGame);
  gameLoop();
}

function gameLoop() {
  if (gameRunning) {
    updatePaddle1();
    setTimeout(gameLoop, 8);
  }
}

function updatePaddle1() {
  console.log("paddle1");
}
