let countdown = 120;
const timerElement = document.getElementById("timer");

document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
  document.getElementById("startButton").disabled = true;
  document.getElementById("resetButton").disabled = false;
  document.getElementById("userInput").disabled = false;
  document.getElementById("submitButton").disabled = false;

  startTimer();
}

function startTimer() {
  const interval = setInterval(() => {
    countdown--;
    timerElement.innerText = countdown;

    if (countdown <= 0) {
      clearInterval(interval);
      document.getElementById("message").innerHTML = "Time's Up...";
      document.getElementById("startButton").disabled = false;
      document.getElementById("resetButton").disabled = true;
      document.getElementById("userInput").disabled = true;
      document.getElementById("submitButton").disabled = true;
    }
  }, 1000);
}
