import { useEffect, useState } from "react";
import {
  fetchPokemon,
  PokemonDataView,
  PokemonInfoFallback,
} from "../utils/pokemon";

function PokemonInfo({ pokemonName }) {
  // 🐨 Have state for the pokemon (null)

  const [state, setState] = useState({
    status: "idle",
    pokemon: null,
    error: null,
  });

  useEffect(() => {
    if (!pokemonName) {
      return;
    }

    setState({ status: "loading" });
    const pokemonFetcher = async () => {
      try {
        const response = await fetchPokemon(pokemonName);
        setState({ status: "resolved", pokemon: response });
        console.log(response);
      } catch (error) {
        console.log("that failed", error);

        setState({ status: "rejected", pokemon: null, error });
      }
    };
    pokemonFetcher();
  }, [pokemonName]);

  if (state.status === "idle") {
    return <div>submit a poke</div>;
  } else if (state.status === "loading") {
    return <PokemonInfoFallback name={pokemonName} />;
  } else if (state.status === "rejected") {
    throw state.error;
  } else if (state.status === "resolved") {
    return <PokemonDataView pokemon={state.pokemon} />;
  }

  // 💣 remove this
}

export default PokemonInfo;
