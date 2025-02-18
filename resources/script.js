// function getComputerChoice() {
//   const randomChoice = Math.random();
//   if (randomChoice < 0.33) {
//     return "rock";
//   } else if (randomChoice < 0.66) {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// }

// let humanScore = 0;
// let computerScore = 0;

// function playRound(getUserChoice, computerChoice) {
//   if (getUserChoice === computerChoice) {
//     return "It's a tie!";
//   } else if (
//     (getUserChoice === "rock" && computerChoice === "scissors") ||
//     (getUserChoice === "scissors" && computerChoice === "paper") ||
//     (getUserChoice === "paper" && computerChoice === "rock")
//   ) {
//     humanScore++;
//     return "You win! Your Score:" + humanScore;
//   } else {
//     computerScore++;
//     return "You Lose. Computer Score:" + computerScore;
//   }
// }

// function updateResults(resultText) {
//   const resultDiv = document.getElementById("results");
//   resultDiv.textContent = resultText;

//   const scoreDiv = document.getElementById("score");
//   scoreDiv.textContent = `Final Score: You  ${humanScore}, Computer  ${computerScore}`;
//   if (humanScore === 5) {
//     resultDiv.textContent = "You won!";
//     setTimeout(() => {
//       window.location.reload(); // Reset page after a delay
//     }, 1500);
//   }
//   if (computerScore === 5) {
//     resultDiv.textContent = "Computer won.";
//     setTimeout(() => {
//       window.location.reload(); // Reset page after a delay
//     }, 3000);
//   }
// }

// document.getElementById("rock").addEventListener("click", function () {
//   const getUserChoice = "rock";
//   const computerChoice = getComputerChoice();
//   const result = playRound(getUserChoice, computerChoice);
//   updateResults(
//     `You chose: ${getUserChoice}. Computer chose: ${computerChoice}. `
//   );
// });

// document.getElementById("paper").addEventListener("click", function () {
//   const getUserChoice = "paper";
//   const computerChoice = getComputerChoice();
//   const result = playRound(getUserChoice, computerChoice);
//   updateResults(
//     `You chose: ${getUserChoice}. Computer chose: ${computerChoice}. `
//   );
// });
// document.getElementById("scissors").addEventListener("click", function () {
//   const getUserChoice = "scissors";
//   const computerChoice = getComputerChoice();
//   const result = playRound(getUserChoice, computerChoice);
//   updateResults(
//     `You chose: ${getUserChoice}. Computer chose: ${computerChoice}. `
//   );
// });
