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

// learning DOM
// const p = document.createElement("p");
// p.textContent = "Hey I’m red!";
// document.body.appendChild(p);
// p.style.color = "red";

// const h3 = document.createElement("h3");
// h3.textContent = "I’m a blue h3!";
// document.body.appendChild(h3);
// h3.style.color = "blue";

// const divContainer = document.createElement("div");

// document.body.appendChild(divContainer);
// divContainer.style.border = "1px solid black";
// divContainer.style.background = "pink";

// const h1InDiv = document.createElement("h1");
// h1InDiv.textContent = "I'm in a div";

// const pInDiv = document.createElement("p");
// pInDiv.textContent = "ME TOO!";

// divContainer.appendChild(h1InDiv);
// divContainer.appendChild(pInDiv);

// document.body.appendChild(divContainer);
