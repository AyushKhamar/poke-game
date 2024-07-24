import { useEffect, useState, useCallback } from "react";
import { PokeDeckProps } from "./PokeDeck";
export interface Pokemon {
  name: string;
  image: string;
  exp: number;
  id: string;
}
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 50) + 1;
};

export const PokeCard = (props: PokeDeckProps) => {
  const fetchPokemon = useCallback(async () => {
    try {
      const indice = generateRandomNumber().toString();
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${indice}/`);
      const resJSON = await res.json();
      return parsePokemon(resJSON);
    } catch (error) {
      console.log(error);
    }
    return {} as Pokemon;
  }, []);
  const parsePokemon = (data: any): Pokemon => {
    const pokemon: Pokemon = {
      name: data.name,
      image: data.sprites.front_default,
      exp: data.base_experience,
      id: data.id,
    };
    return pokemon;
  };

  const [data, setData] = useState<Pokemon>({
    name: "",
    exp: 0,
    id: "",
    image: "",
  });
  useEffect(() => {
    fetchPokemon().then((res) => setData(res));
  }, []);
  useEffect(() => {
    if (data.exp !== 0) props.addScore(data.exp);
  }, [data]);
  const imgURL = data.image;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid white",
        borderRadius: "20px",
        margin: "4px",
      }}
    >
      <h3>{data.name}</h3>
      <div>
        <img
          src={imgURL}
          alt=""
          style={{ height: "150px", width: "150px", padding: "0px" }}
        />
        <h4>Exp : {data.exp}</h4>
      </div>
    </div>
  );
};
