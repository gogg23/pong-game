//create JS representation from the DOM
const startText = document.getElementById("startText");
const paddle1 = document.getElementById("paddle1");

//Game Variables
let gameRunning = false;
let keysPressed = {};
let paddle1Speed = 0;
let paddle1Y = 150;

//Game Constants
const paddleAcceleration = 1;
maxPaddleSpeed = 5;

document.addEventListener("keydown", startGame);
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

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
    paddle1Speed = Math.max(paddle1Speed - paddleAcceleration, -maxPaddleSpeed);
  } else if (keysPressed["s"]) {
    paddle1Speed = Math.min(paddle1Speed + paddleAcceleration, +maxPaddleSpeed);
  }
  paddle1Y = paddle1Speed;

  paddle1.style.top = paddle1Y + "px";
}
