import { useState } from "react";
import "./App.css";
import { PokemonErrorBoundary, PokemonForm } from "./pokemon";
import PokemonInfo from "./useCallbackHookPractice/PokemonInfo";
import Counter from "./UseReducerHook";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  function handleReset() {
    setPokemonName("");
  }

  return (
    <div className="pokemon-info-app">
      <div>
        <Counter />
      </div>
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonErrorBoundary onReset={handleReset} resetKeys={[pokemonName]}>
          <PokemonInfo pokemonName={pokemonName} />
        </PokemonErrorBoundary>
      </div>
    </div>
  );
}

export default App;
