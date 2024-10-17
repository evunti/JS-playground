function getComputerChoice() {
  const randomChoice = Math.random();
  if (randomChoice < 0.33) {
    return "rock";
  } else if (randomChoice < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

// define what beats what
// if user won print user won +1 humanScore
function playRound(getUserChoice, computerChoice) {
  if (getUserChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (getUserChoice === "rock" && computerChoice === "scissors") ||
    (getUserChoice === "scissors" && computerChoice === "paper") ||
    (getUserChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    return "You win! Your Score:" + humanScore;
  } else {
    computerScore++;
    return "You Lose. Computer Score:" + computerScore;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let getUserChoice = prompt("Choose rock, paper, or scissors");
    getUserChoice = getUserChoice.toLowerCase();
    if (
      getUserChoice === "rock" ||
      getUserChoice === "paper" ||
      getUserChoice === "scissors"
    ) {
      let computerChoice = getComputerChoice();
      console.log(
        "You chose: " +
          getUserChoice +
          ". " +
          "Computer chose: " +
          computerChoice
      );
      console.log(playRound(getUserChoice, computerChoice));
    } else {
      console.log("Invalid choice. Please choose rock, paper, or scissors.");
      i--;
    }
  }
  console.log(`Final Score: You - ${humanScore}, Computer - ${computerScore}`);
}

playGame();
