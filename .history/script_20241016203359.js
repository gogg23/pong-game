//create JS representation from the DOM
const startText = document.getElementById("startText");

//Games Variable
let gameRunning = false;
let keysPressed = {};
let paddle1Speed = 0;
let paddle1Y = 150;

document.addEventListener("keydown", startGame);
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyUp", handleKeyUp);

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

function handleKeyUp(e) {
  keysPressed[e.key] = false;
}

function updatePaddle1() {
  if (keysPressed["w"]) {
    paddleSpeed = -5;
  }
  paddle1Y = paddle1Speed;
  console.log(paddle1Y);
  console.dir(myObj);
}