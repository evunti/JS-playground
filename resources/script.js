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

let userChoice = prompt("Choose rock, paper, or scissors");

if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
     console.log("You chose: " + userChoice + "." + " " + "Computer chose: " + getComputerChoice());;}
    
   