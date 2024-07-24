import { useState } from "react";
import { PokeDeck } from "./PokeDeck";
import { Pokemon } from "./PokeCard";

export const PokeGame = () => {
  const [scoreOne, setScoreOne] = useState<number[]>([]);
  const [scoreTwo, setScoreTwo] = useState<number[]>([]);
  const addScoreOne = (score: number) => {
    setScoreOne((currentScore) => {
      return [...currentScore, score];
    });
  };
  const addScoreTwo = (score: number) => {
    setScoreTwo((currentScore) => {
      return [...currentScore, score];
    });
  };
  let totalOne = 0;
  scoreOne.forEach((data) => (totalOne = totalOne + data));
  let totalTwo = 0;
  scoreTwo.forEach((data) => (totalTwo = totalTwo + data));

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PokeDeck addScore={addScoreOne} />
      <div>
        <div>
          Team A {totalOne} vs Team B {totalTwo}
        </div>
        <div>{totalOne > totalTwo ? "Team A Wins!!!" : "Team B Wins!!!"}</div>
        <button
          style={{ margin: "5px" }}
          onClick={() => {
            window.location.reload();
          }}
        >
          Restart
        </button>
      </div>
      <PokeDeck addScore={addScoreTwo} />
    </div>
  );
};
