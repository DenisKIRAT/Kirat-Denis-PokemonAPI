import React  from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "../Pokemon";

function PokemonList({ searchTerm = "" }) {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
    console.log("res", res.data.results);
    setPokemons(res.data.results);
  }

  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "2%",
      }}
    >
      <h1>Liste des pokemons par 100</h1>
      <ul>
        {pokemons.map((item) => {
          return (
            <Pokemon
              key={item.id}
              item={item}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default PokemonList;
