"use client";
import { useState } from "react";
import styles from "./page.module.css";

const choiceStyles = {
  display: "flex",
  alignItems: "center",
  marginBottom: 40,
};

const nameStyles = {
  margin: 0,
  fontSize: 24,
  color: "#ffff",
};
const resultStyles = {
  marginTop: 40,
  fontSize: 48,
  color: "#ffff",
};
const CHOICES = [{ name: "rock" }, { name: "paper" }, { name: "scissors" }];

function Game() {
  const [playerChoice, setPlayerChoice] = useState<{ name: string } | null>(
    null
  );
  const [computerChoice, setComputerChoice] = useState<{ name: string } | null>(
    null
  );
  const [result, setResult] = useState<string | null>(null);

  function handlePlayerChoice(choice: { name: string }): void {
    const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    if (choice.name === computerChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && computerChoice.name === "scissors") ||
      (choice.name === "paper" && computerChoice.name === "rock") ||
      (choice.name === "scissors" && computerChoice.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  }

  function resetGame() {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  }

  return (
    <div className={styles.container}>
      <h1 style={{ fontSize: 48, marginTop: 0 }}>Rock Paper Scissors</h1>
      <div>
        {CHOICES.map((choice) => (
          <button
            className={styles.button}
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
          >
            {choice.name}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div className={styles.results}>
          <div style={choiceStyles}>
            <p style={nameStyles}>You chose {playerChoice.name}</p>
          </div>
          <div style={choiceStyles}>
            <p style={nameStyles}>The computer chose {computerChoice.name}</p>
          </div>
          <h2 style={resultStyles}>{result}</h2>
          <button className={styles.button} onClick={resetGame}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
}

export default Game;
