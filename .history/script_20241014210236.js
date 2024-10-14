//create JS representation from the DOM
const startText = document.getElementById("startText");

//Games Variable
let gameRunning = false;

document.addEventListener("keydown", startGame);

// Start Game
function startGame() {
  gameRunning = true;
  console.log("start");
  startText.style.display = "none";
  document.removeEventListener("keydown", startGame);
}
