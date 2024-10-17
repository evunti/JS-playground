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

let getUserChoice = prompt("Choose rock, paper, or scissors");
getUserChoice = getUserChoice.toLowerCase();
let computerChoice = getComputerChoice();
if (
  getUserChoice === "rock" ||
  getUserChoice === "paper" ||
  getUserChoice === "scissors"
) {
  // generate a new computer choice
  console.log(
    "You chose: " + getUserChoice + ". " + "Computer chose: " + computerChoice
  );
}

let humanScore = 0;
let computerScore = 0;

// define what beats what
// if user won print uesr won +1 humanScore
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
console.log(playRound(getUserChoice, computerChoice));

// if user won print uesr won +1 humanScore
