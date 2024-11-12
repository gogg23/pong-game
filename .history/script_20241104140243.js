//create JS representation from the DOM
const startText = document.getElementById("startText");
const paddle1 = document.getElementById("paddle1");
const paddle2 = document.getElementById("paddle2");

//Game Variables
let gameRunning = false;
let keysPressed = {};
let paddle1Speed = 0;
let paddle1Y = 150;
let paddle2Speed = 0;
let paddle2YSpeed = 150;

//Game Constants
const paddleAcceleration = 1;
const maxPaddleSpeed = 5;
const paddleDeceleration = 1;
const gameHeight = 400;
const gameWidth = 600;

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
    updatePaddle2();
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
    paddle1Speed = Math.min(paddle1Speed + paddleAcceleration, maxPaddleSpeed);
  } else {
    if (paddle1Speed > 0) {
      paddle1Speed = Math.max(paddle1Speed - paddleDeceleration, 0);
    } else if (paddle1Speed < 0) {
      paddle1Speed = Math.min(paddle1Speed + paddleDeceleration, 0);
    }
  }

  paddle1Y += paddle1Speed;

  if (paddle1Y < 0) {
    paddle1Y = 0;
  }

  if (paddle1Y > gameHeight - paddle1.clientHeight) {
    paddle1Y = gameHeight - paddle1.clientHeight;
  }
  paddle1.style.top = paddle1Y + "px";
}

function updatePaddle2() {
  if (keysPressed["ArrowUp"]) {
    paddle2Speed = Math.max(paddle2Speed - paddleAcceleration, -maxPaddleSpeed);
  } else if (keysPressed["ArrowDown"]) {
    paddle2Speed = Math.min(paddle2Speed + paddleAcceleration, maxPaddleSpeed);
  } else {
    if (paddle2Speed > 0) {
      paddle2Speed = Math.max(paddle2Speed - paddleDeceleration, 0);
    } else if (paddle2Speed < 0) {
      paddle2Speed = Math.min(paddle2Speed + paddleDeceleration, 0);
    }
  }

  paddle2Y += paddle2Speed;

  if (paddle2Y < 0) {
    paddle2Y = 0;
  }

  if (paddle2Y > gameHeight - paddle2.clientHeight) {
    paddle2Y = gameHeight - paddle2.clientHeight;
  }
  paddle2.style.top = paddle2Y + "px";
}
