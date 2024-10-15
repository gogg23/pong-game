//create JS representation from the DOM
const startText = document.getElementById("startText");

//Games Variable
let gameRunning = false;
let keysPressed = {};

document.addEventListener("keydown", startGame);
document.addEventListener("keydown", handleKeyDown);

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

function handleKeyDown(e) {
  keysPressed[e.key] = true;
}

function updatePaddle1() {
  console.log("keysPressed");
}
