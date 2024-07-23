import { useEffect, useState, useCallback } from "react";

export interface Pokemon {
  name: string;
  image: string;
  exp: string;
  id: string;
}
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 50) + 1;
};

export const PokeCard = () => {
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
    exp: "",
    id: "",
    image: "",
  });
  useEffect(() => {
    fetchPokemon().then((res) => setData(res));
  }, []);
  const imgURL = data.image;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid white",
        borderRadius: "20px",
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
