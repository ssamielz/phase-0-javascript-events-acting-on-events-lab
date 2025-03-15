// Your code here
const dodger = document.getElementById("dodger");
const game = document.querySelector("#game");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    const gameWidth = game.clientWidth; // Width of the game field
    const dodgerWidth = dodger.clientWidth; // Width of the dodger
  
    if (left < 360 ) { // Ensure movement within bounds
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  
  

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
