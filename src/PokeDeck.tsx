import { PokeCard } from "./PokeCard";
export interface PokeDeckProps {
  addScore: (score: number) => void;
}
export const PokeDeck = (props: PokeDeckProps) => {
  return (
    <div style={{ display: "flex" }}>
      <PokeCard addScore={props.addScore} />
      <PokeCard addScore={props.addScore} />
      <PokeCard addScore={props.addScore} />
      <PokeCard addScore={props.addScore} />
    </div>
  );
};
