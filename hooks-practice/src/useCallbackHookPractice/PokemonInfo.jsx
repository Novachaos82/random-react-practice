import React from "react";
import { useEffect } from "react";
import { fetchPokemon, PokemonDataView, PokemonInfoFallback } from "../pokemon";
import UseAsyncHook from "./UseAsyncHook";

function PokemonInfo({ pokemonName }) {
  const {
    data: pokemon,
    status,
    error,
    run,
  } = UseAsyncHook({ status: pokemonName ? "pending" : "idle" });
  useEffect(() => {
    if (!pokemonName) {
      return;
    }

    const pokemonPromise = fetchPokemon(pokemonName);
    run(pokemonPromise);
  }, [pokemonName, run]);

  switch (status) {
    case "idle":
      return <span>Submit a pokemon</span>;
    case "pending":
      return <PokemonInfoFallback name={pokemonName} />;
    case "rejected":
      throw error;
    case "resolved":
      return <PokemonDataView pokemon={pokemon} />;
    default:
      throw new Error("This should be impossible");
  }
}

export default PokemonInfo;
