let score = 0;
let balls = 0;
let overs = 0;
let totalOvers = 5;  // Total number of overs
const runs = [0, 1, 2, 3, 4, 5, 6]; // Possible run values for each ball

// DOM Elements
const scoreElement = document.getElementById('score');
const ballsElement = document.getElementById('balls');
const oversElement = document.getElementById('overs');
const finalScoreElement = document.getElementById('finalScore');
const hitButton = document.getElementById('hitButton');
const endMessage = document.getElementById('endMessage');
const restartButton = document.getElementById('restartButton');
const ballElementDiv = document.querySelector('.ball');
const ballsInOverElement = document.getElementById('ballsInOver');
const totalOversElement = document.getElementById('totalOvers');

// Start button event listener
hitButton.addEventListener('click', () => {
  if (overs < totalOvers) {
    playBall();
  }
});

restartButton.addEventListener('click', restartGame);

function playBall() {
  // Simulate the ball hitting and score a random run
  let run = runs[Math.floor(Math.random() * runs.length)];
  score += run;
  balls++;

  // Update the scoreboard
  scoreElement.textContent = score;
  ballsElement.textContent = balls;

  // Update overs and balls in over
  if (balls % 6 === 0) {
    overs++;
    oversElement.textContent = overs;
    ballsInOverElement.textContent = '0';
  } else {
    ballsInOverElement.textContent = balls % 6;
  }

  // Simulate ball animation and reset after hitting
  simulateBallHit(run);

  // Check if the game is over (after total overs are completed)
  if (balls === totalOvers * 6) {
    endGame();
  }
}

function simulateBallHit(run) {
  ballElementDiv.style.top = '0px';
  
  setTimeout(() => {
    ballElementDiv.style.transition = 'top 0.5s ease';
    ballElementDiv.style.top = '150px';  // Ball falls to the bat

    // Show message based on runs
    setTimeout(() => {
      if (run === 0) {
        alert('You missed!');
      } else {
        alert(`You scored ${run} run${run > 1 ? 's' : ''}!`);
      }
    }, 500);
  }, 200);
}

function endGame() {
  // Hide game content and show end message
  hitButton.style.display = 'none';
  endMessage.style.display = 'block';
  finalScoreElement.textContent = score;
}

function restartGame() {
  // Reset the game
  score = 0;
  balls = 0;
  overs = 0;
  scoreElement.textContent = score;
  ballsElement.textContent = balls;
  oversElement.textContent = overs;
  ballsInOverElement.textContent = '0';
  hitButton.style.display = 'block';
  endMessage.style.display = 'none';
}
