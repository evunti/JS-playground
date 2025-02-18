"use client";
import { useState } from "react";
import styles from "./page.module.css";

const CHOICES = [{ name: "rock" }, { name: "paper" }, { name: "scissors" }];

function Game() {
  const [playerChoice, setPlayerChoice] = useState<{ name: string } | null>(
    null
  );
  const [computerChoice, setComputerChoice] = useState<{ name: string } | null>(
    null
  );
  const [result, setResult] = useState<string | null>(null);

  function handlePlayerChoice({ choice }: { choice: { name: string } }): void {
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
    <div className={styles.page}>
      <section>
        <div>
          <button
            id="rock"
            onClick={() => handlePlayerChoice({ choice: { name: "rock" } })}
          >
            Rock
          </button>
          <button
            id="paper"
            onClick={() => handlePlayerChoice({ choice: { name: "paper" } })}
          >
            Paper
          </button>
          <button
            id="scissors"
            onClick={() => handlePlayerChoice({ choice: { name: "scissors" } })}
          >
            Scissors
          </button>
        </div>
        <div id="results">{result}</div>
        <div id="score"></div>
        <button onClick={resetGame}>Reset</button>
      </section>
    </div>
  );
}

export default function Home() {
  return <Game />;
}
