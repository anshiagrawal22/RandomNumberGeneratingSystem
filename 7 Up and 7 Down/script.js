document.getElementById("higher").addEventListener("click", function () {
  playGame("higher");
});

document.getElementById("lower").addEventListener("click", function () {
  playGame("lower");
});

function playGame(choice) {
  const randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
  document.getElementById("random-number").textContent = `Random Number: ${randomNumber}`;

  let message = "";
  if (choice === "higher" && randomNumber > 7) {
    message = "You guessed correctly! 🎉 It's higher than 7!";
  } else if (choice === "lower" && randomNumber < 7) {
    message = "You guessed correctly! 🎉 It's lower than 7!";
  } else if (randomNumber === 7) {
    message = "It's exactly 7! Try again.";
  } else {
    message = "Oops! You guessed wrong. 😞";
  }

  document.getElementById("message").textContent = message;
}
